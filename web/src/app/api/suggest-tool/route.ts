import { NextRequest, NextResponse } from "next/server";

/**
 * Files a "Suggest a New AI Tool" issue on behalf of an employee.
 * See /web/src/app/api/request-access/route.ts for the same architecture note —
 * this mirrors that pattern for the suggestion flow.
 */

interface SuggestToolBody {
  toolName: string;
  url?: string;
  problem: string;
  beneficiaries: string;
  department: string;
  useCase: string;
  requiresCompanyData: string;
  requiresCustomerData: string;
  selfHosted: string;
  additionalNotes?: string;
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Partial<SuggestToolBody>;

  const required: (keyof SuggestToolBody)[] = [
    "toolName",
    "problem",
    "beneficiaries",
    "department",
    "useCase",
    "requiresCompanyData",
    "requiresCustomerData",
    "selfHosted",
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
    return NextResponse.json({
      ok: true,
      filed: false,
      message:
        "Suggestion captured. GitHub issue filing is not configured in this environment (GITHUB_TOKEN missing), so this was not written anywhere durable yet. Configure GITHUB_TOKEN/GITHUB_OWNER/GITHUB_REPO to enable real filing.",
    });
  }

  const title = `[New AI Tool]: ${body.toolName}`;
  const issueBody = [
    `**Tool / Project Name:** ${body.toolName}`,
    body.url ? `**GitHub URL / Website:** ${body.url}` : "",
    `**What problem does it solve?:** ${body.problem}`,
    `**Who could benefit?:** ${body.beneficiaries}`,
    `**Suggested Department:** ${body.department}`,
    `**Suggested Use Case:** ${body.useCase}`,
    `**Requires Company Data?:** ${body.requiresCompanyData}`,
    `**Requires Customer Data?:** ${body.requiresCustomerData}`,
    `**Can it be Self-Hosted?:** ${body.selfHosted}`,
    body.additionalNotes ? `**Additional Notes:** ${body.additionalNotes}` : "",
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
      body: JSON.stringify({ title, body: issueBody, labels: ["new-ai-tool", "Research"] }),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ ok: false, error: `GitHub API error: ${res.status} ${text}` }, { status: 502 });
    }

    const issue = await res.json();
    return NextResponse.json({ ok: true, filed: true, url: issue.html_url });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Unknown error filing suggestion" },
      { status: 502 }
    );
  }
}
