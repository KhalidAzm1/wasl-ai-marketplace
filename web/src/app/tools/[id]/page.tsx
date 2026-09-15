import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllToolIds, getToolById } from "@/lib/tools";
import StatusBadge from "@/components/StatusBadge";
import SecurityBadge from "@/components/SecurityBadge";
import { DEPLOYMENT_LABEL } from "@/data/taxonomy";

export function generateStaticParams() {
  return getAllToolIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const tool = getToolById(id);
  if (!tool) return { title: "Tool not found" };
  return { title: tool.name, description: tool.description };
}

const REPO_BASE = "https://github.com/KhalidAzm1/wasl-ai-marketplace/blob/main";

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tool = getToolById(id);
  if (!tool) notFound();

  return (
    <div className="pb-16">
      <div className="border-b border-slate-200 py-7 dark:border-slate-800">
        <div className="mb-4 flex items-center gap-1.5 text-[0.8rem] text-slate-400">
          <Link href="/" className="hover:text-brand">Marketplace</Link>
          <span>/</span>
          <span>{tool.category}</span>
          <span>/</span>
          <strong className="text-slate-600 dark:text-slate-300">{tool.name}</strong>
        </div>

        <div className="flex flex-wrap items-start gap-4">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-xl font-extrabold text-white"
            style={{ backgroundColor: tool.color }}
          >
            {tool.initials}
          </div>
          <div className="min-w-[240px] flex-1">
            <h1 className="text-2xl font-extrabold sm:text-3xl">{tool.name}</h1>
            <p className="mt-1.5 text-slate-600 dark:text-slate-300">{tool.tagline}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <StatusBadge status={tool.status} />
              <SecurityBadge level={tool.securityLevel} />
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2.5">
          <Link
            href={`/request-access?tool=${encodeURIComponent(tool.name)}`}
            className="rounded-lg bg-brand px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            Request Access
          </Link>
          <Link
            href={`/suggest-tool?feedback_for=${encodeURIComponent(tool.name)}`}
            className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-bold transition-colors hover:border-brand hover:text-brand dark:border-slate-700"
          >
            Submit Feedback
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 pt-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          {!tool.isDeployed && (
            <div className="flex items-start gap-2.5 rounded-xl border border-status-pilot/30 bg-status-pilot/10 p-3.5 text-sm text-slate-700 dark:text-slate-200">
              <span>⚠️</span>
              <span>
                This tool is at <strong>{tool.status}</strong> status. Everything below describes what WASL
                is <strong>evaluating</strong> — not deployed or approved functionality.
              </span>
            </div>
          )}

          <Block title="Overview">
            <p>{tool.problem}</p>
          </Block>

          <Block title="What It Does">
            <p>{tool.whatItDoes}</p>
          </Block>

          <Block title="Why WASL Is Evaluating It">
            <p>{tool.whyEvaluating}</p>
          </Block>

          <Block title="Who Can Benefit">
            <div className="flex flex-wrap gap-2">
              {tool.departments.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[0.78rem] font-semibold text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                >
                  {d}
                </span>
              ))}
            </div>
          </Block>

          <Block title="Example Use Cases (Proposed, Not Deployed)">
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {tool.useCases.map((u) => (
                <li
                  key={u}
                  className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-[0.85rem] text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                >
                  💡 {u}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Data Considerations">
            <p>{tool.dataConsiderations}</p>
          </Block>

          <Block title="Security &amp; Compliance">
            <p>{tool.securityNotes}</p>
            <p className="mt-3">{tool.complianceNotes}</p>
            <p className="mt-3">{tool.dataResidencyNotes}</p>
            <p className="mt-4 rounded-lg border border-risk-high/25 bg-risk-high/[0.06] px-3.5 py-2.5 text-[0.85rem] font-semibold">
              No tool is considered approved, secure, or SAMA compliant unless formally reviewed by WASL
              Security and Compliance/Legal.
            </p>
          </Block>

          <Block title="How to Use">
            <p>{tool.howToUse}</p>
          </Block>

          <details className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
            <summary className="cursor-pointer text-sm font-bold text-slate-600 dark:text-slate-300">
              Technical Information (advanced)
            </summary>
            <div className="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <h4 className="mb-1 font-bold text-slate-800 dark:text-slate-100">Architecture</h4>
                <p>{tool.architecture}</p>
              </div>
              <div>
                <h4 className="mb-1 font-bold text-slate-800 dark:text-slate-100">Deployment Model</h4>
                <p>
                  {DEPLOYMENT_LABEL[tool.deployment]} — {tool.deploymentNotes}
                </p>
              </div>
              <div>
                <h4 className="mb-1 font-bold text-slate-800 dark:text-slate-100">Integrations (Proposed)</h4>
                <div className="flex flex-wrap gap-2">
                  {tool.integrations.map((i) => (
                    <span
                      key={i}
                      className="rounded-full bg-white px-2.5 py-1 text-[0.75rem] font-semibold dark:bg-slate-800"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-1 font-bold text-slate-800 dark:text-slate-100">POC Status</h4>
                <p>{tool.pocStatus}</p>
              </div>
              {tool.repository && (
                <div>
                  <h4 className="mb-1 font-bold text-slate-800 dark:text-slate-100">Original GitHub Repository</h4>
                  <a
                    href={tool.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand hover:underline"
                  >
                    {tool.repository.replace("https://", "")} ↗
                  </a>
                  <p className="mt-1 text-[0.78rem] text-slate-400">
                    This is an open-source project. All credit belongs to its original authors.
                  </p>
                </div>
              )}
              <div>
                <h4 className="mb-1 font-bold text-slate-800 dark:text-slate-100">Full Governance Record</h4>
                <a
                  href={`${REPO_BASE}/${tool.docsPath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand hover:underline"
                >
                  View full review history on GitHub ↗
                </a>
              </div>
            </div>
          </details>
        </div>

        <aside className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-3 text-[0.72rem] font-bold uppercase tracking-wide text-slate-400">
              At a Glance
            </h3>
            <MetaRow k="Category" v={tool.category} />
            <MetaRow k="License" v={tool.license ?? "N/A"} />
            <MetaRow k="Last Reviewed" v={tool.lastReviewed} />
            <MetaRow k="Owner / Reviewer" v={tool.owner} />
            <MetaRow k="Target Users" v={tool.targetUsers} last />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-3 text-[0.72rem] font-bold uppercase tracking-wide text-slate-400">
              Take Action
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href={`/request-access?tool=${encodeURIComponent(tool.name)}`}
                className="rounded-lg bg-brand px-4 py-2.5 text-center text-sm font-bold text-white hover:bg-brand-dark"
              >
                Request Access
              </Link>
              <Link
                href="/suggest-tool"
                className="rounded-lg border border-slate-300 px-4 py-2.5 text-center text-sm font-bold hover:border-brand hover:text-brand dark:border-slate-700"
              >
                Suggest a New Tool
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 border-b border-slate-200 pb-2.5 text-[1.05rem] font-extrabold dark:border-slate-800">
        {title}
      </h2>
      <div className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{children}</div>
    </section>
  );
}

function MetaRow({ k, v, last }: { k: string; v: string; last?: boolean }) {
  return (
    <div className={`flex justify-between gap-3 py-2 text-[0.83rem] ${last ? "" : "border-b border-slate-100 dark:border-slate-800"}`}>
      <span className="text-slate-400">{k}</span>
      <span className="text-right font-bold">{v}</span>
    </div>
  );
}
