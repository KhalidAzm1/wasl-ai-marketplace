import { NextRequest, NextResponse } from "next/server";

/**
 * Files an "Access Request" on behalf of an employee.
 *
 * Architecture note (see /web/docs/architecture.md): in production this route
 * creates a GitHub Issue in the wasl-ai-marketplace repo using a server-side
 * GITHUB_TOKEN (a fine-grained PAT or GitHub App token scoped to Issues:write
 * on this repo only). The employee never sees or needs a GitHub account —
 * they only ever interact with this form.
 *
 * This route is written to run for real once GITHUB_TOKEN is configured in
 * the deployment environment. Without it, it safely no-ops and returns a
 * clear message — it does not silently pretend to succeed.
 */

interface RequestAccessBody {
  employeeName: string;
  department: string;
  toolRequested: string;
  businessUseCase: string;
  expectedFrequency: string;
  dataType: string;
  managerApproval: string;
  additionalInfo?: string;
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Partial<RequestAccessBody>;

  const required: (keyof RequestAccessBody)[] = [
    "employeeName",
    "department",
    "toolRequested",
    "businessUseCase",
    "expectedFrequency",
    "dataType",
    "managerApproval",
  ];
  const missing = required.filter((k) => !body[k]);
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;

  if (!token || !owner || !repo) {
    // Expected in this dev/prototype environment — no GitHub write credentials configured.
    return NextResponse.json({
      ok: true,
      filed: false,
      message:
        "Request captured. GitHub issue filing is not configured in this environment (GITHUB_TOKEN missing), so this was not written anywhere durable yet. Configure GITHUB_TOKEN/GITHUB_OWNER/GITHUB_REPO to enable real filing.",
    });
  }

  const title = `[Access Request]: ${body.toolRequested} — ${body.employeeName}`;
  const issueBody = [
    `**Employee Name:** ${body.employeeName}`,
    `**Department:** ${body.department}`,
    `**Tool Requested:** ${body.toolRequested}`,
    `**Business Use Case:** ${body.businessUseCase}`,
    `**Expected Frequency of Use:** ${body.expectedFrequency}`,
    `**Type of Data Involved:** ${body.dataType}`,
    `**Manager Approval Required?:** ${body.managerApproval}`,
    body.additionalInfo ? `**Additional Information:** ${body.additionalInfo}` : "",
    "",
    "_Filed via the WASL AI Marketplace web app._",
  ]
    .filter(Boolean)
    .join("\n\n");

  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body: issueBody, labels: ["access-request"] }),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ ok: false, error: `GitHub API error: ${res.status} ${text}` }, { status: 502 });
    }

    const issue = await res.json();
    return NextResponse.json({ ok: true, filed: true, url: issue.html_url });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Unknown error filing request" },
      { status: 502 }
    );
  }
}
