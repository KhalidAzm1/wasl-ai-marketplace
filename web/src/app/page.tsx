import Link from "next/link";
import { getAllTools, getCatalogStats, getInternalAgents, getExternalPlatforms, getPocRoadmap } from "@/lib/tools";
import { CATEGORIES, PRIORITY_META } from "@/data/taxonomy";
import MarketplaceGrid from "@/components/MarketplaceGrid";
import ToolCard from "@/components/ToolCard";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; type?: string }>;
}) {
  const params = await searchParams;
  const tools = getAllTools();
  const stats = getCatalogStats();
  const internalAgents = getInternalAgents();
  const externalPlatforms = getExternalPlatforms();
  const pocRoadmap = getPocRoadmap();
  const initialCategory =
    params.category && (CATEGORIES as string[]).includes(params.category)
      ? params.category
      : undefined;
  const initialType =
    params.type === "internal-agent" || params.type === "external-platform" ? params.type : undefined;

  return (
    <div>
      <section className="py-12 text-center sm:py-16">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[0.72rem] font-bold uppercase tracking-wide text-brand dark:border-slate-800 dark:bg-slate-900">
          WASL AI Marketplace · v1.1
        </span>
        <h1 className="bg-gradient-to-br from-slate-900 to-brand bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl dark:from-white dark:to-brand-light">
          WASL AI Marketplace
        </h1>
        <p className="mx-auto mt-3.5 max-w-xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
          Discover AI tools, agents and automations evaluated for WASL.
        </p>
      </section>

      <section className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Catalog Tools" value={stats.total} />
        <StatCard label="Internal WASL Agents" value={stats.internalAgents} />
        <StatCard label="AI Platforms" value={stats.externalPlatforms} />
        <StatCard label="Categories Covered" value={`${stats.categoriesCovered}/${CATEGORIES.length}`} />
      </section>

      <section className="mb-10 rounded-2xl border border-risk-high/25 bg-risk-high/[0.06] p-6">
        <h3 className="mb-1.5 flex items-center gap-2 font-bold">🔴 Security &amp; Compliance Reminder</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          No AI project may receive sensitive WASL, banking, customer, employee, or regulated data until
          appropriate security, legal, and compliance approval is completed. No tool or agent on this site is
          described as SAMA compliant, Approved, Production, or officially &quot;secure,&quot; unless that has
          been formally reviewed and approved. Every internal agent below is a <strong>Research-stage
          concept</strong> only — none are built or deployed yet.
        </p>
      </section>

      <section className="mb-14">
        <div className="mb-5 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight">WASL Department AI Agents</h2>
          <p className="mx-auto mt-1.5 max-w-lg text-sm text-slate-500 dark:text-slate-400">
            AI copilots designed for the way each WASL team works.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {internalAgents.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mb-14">
        <div className="mb-5 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight">AI Platforms</h2>
          <p className="mx-auto mt-1.5 max-w-lg text-sm text-slate-500 dark:text-slate-400">
            Third-party and open-source platforms WASL is evaluating as possible infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {externalPlatforms.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-5">
          <h2 className="text-lg font-extrabold tracking-tight">🗺️ Internal Agent POC Roadmap</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Recommended build order for the internal WASL Agents above — an initial recommendation from
            the marketplace maintainers, pending PMO/leadership sign-off. Not a committed schedule.
          </p>
        </div>
        <ol className="space-y-2">
          {pocRoadmap.map((tool) => (
            <li
              key={tool.id}
              className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-extrabold text-white">
                {tool.pocOrder}
              </span>
              <Link href={`/tools/${tool.id}`} className="font-bold hover:text-brand">
                {tool.name}
              </Link>
              {tool.priority && (
                <span
                  className={`ml-auto rounded-full px-2.5 py-1 text-[0.7rem] font-bold ${PRIORITY_META[tool.priority].bgClass} ${PRIORITY_META[tool.priority].textClass}`}
                >
                  {tool.priority} priority
                </span>
              )}
            </li>
          ))}
        </ol>
      </section>

      <MarketplaceGrid tools={tools} initialCategory={initialCategory} initialType={initialType} />

      <section className="my-14">
        <h2 className="mb-5 text-lg font-extrabold tracking-tight">Status System</h2>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          <StatusLegendItem emoji="🔵" label="Research" desc="Project is being evaluated." />
          <StatusLegendItem emoji="🟡" label="Pilot" desc="Currently being tested." />
          <StatusLegendItem emoji="✅" label="Approved" desc="Approved for defined WASL use cases." />
          <StatusLegendItem emoji="🟢" label="Production" desc="Actively used in WASL." />
          <StatusLegendItem emoji="🔴" label="Rejected" desc="Reviewed but not approved." />
          <StatusLegendItem emoji="⚫" label="Deprecated" desc="Previously used, no longer recommended." />
        </div>
      </section>

      <section className="mb-16 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
        <h3 className="mb-1.5 font-bold">📋 How the Marketplace Works</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Tools enter the catalog at 🔵 Research status and move through a lightweight, risk-proportionate
          governance pipeline (Initial AI Review → Security Review → Compliance/Legal Review → POC →
          Decision) before being marked Approved or Production. Know a tool that should be here?{" "}
          <Link href="/suggest-tool" className="font-bold text-brand hover:underline">
            Suggest an AI Tool
          </Link>
          .
        </p>
      </section>

      <section className="mb-16 rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <h3 className="mb-1.5 font-bold">🏗️ Shared Agent Platform (Architecture Principle)</h3>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
          Most internal WASL Agents are proposed to run on one shared platform rather than separate,
          bespoke infrastructure per agent:
        </p>
        <div className="mb-5 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono text-[0.8rem] leading-relaxed text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
          Employee<br />
          &nbsp;&nbsp;↓<br />
          WASL Marketplace / Replit App<br />
          &nbsp;&nbsp;↓<br />
          n8n<br />
          &nbsp;&nbsp;↓<br />
          Agent Logic<br />
          &nbsp;&nbsp;↓<br />
          Azure OpenAI + Azure AI Search + Approved Internal Systems<br />
          &nbsp;&nbsp;↓<br />
          Output / Action / Human Approval
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-3.5 dark:border-slate-800">
            <strong className="block text-sm">Replit</strong>
            <span className="text-[0.8rem] text-slate-500 dark:text-slate-400">
              Employee UI, chat interface, agent pages, dashboards, file upload, results display,
              approval buttons, history.
            </span>
          </div>
          <div className="rounded-xl border border-slate-200 p-3.5 dark:border-slate-800">
            <strong className="block text-sm">n8n</strong>
            <span className="text-[0.8rem] text-slate-500 dark:text-slate-400">
              Workflow orchestration, system integrations (Jira, Azure DevOps, Teams, email, APIs),
              scheduled jobs, notifications, approvals, data movement.
            </span>
          </div>
          <div className="rounded-xl border border-slate-200 p-3.5 dark:border-slate-800">
            <strong className="block text-sm">Azure OpenAI</strong>
            <span className="text-[0.8rem] text-slate-500 dark:text-slate-400">
              LLM reasoning, generation, classification, analysis.
            </span>
          </div>
          <div className="rounded-xl border border-slate-200 p-3.5 dark:border-slate-800">
            <strong className="block text-sm">Azure AI Search</strong>
            <span className="text-[0.8rem] text-slate-500 dark:text-slate-400">
              Internal approved knowledge, RAG, policies, documentation.
            </span>
          </div>
        </div>
        <p className="mt-4 text-[0.8rem] text-slate-400">
          This is a proposed architecture principle, not a built platform. No shared infrastructure has
          been provisioned yet — see{" "}
          <a
            href="https://github.com/KhalidAzm1/wasl-ai-marketplace/blob/main/web/docs/architecture.md"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand hover:underline"
          >
            the full architecture doc ↗
          </a>
          .
        </p>
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-card dark:border-slate-800 dark:bg-slate-900">
      <div className="text-2xl font-extrabold text-brand">{value}</div>
      <div className="mt-0.5 text-[0.76rem] font-semibold text-slate-400">{label}</div>
    </div>
  );
}

function StatusLegendItem({ emoji, label, desc }: { emoji: string; label: string; desc: string }) {
  return (
    <div className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-900">
      <span className="text-base">{emoji}</span>
      <div>
        <strong className="block text-sm">{label}</strong>
        <span className="text-[0.78rem] text-slate-400">{desc}</span>
      </div>
    </div>
  );
}
