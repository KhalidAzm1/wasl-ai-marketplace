import Link from "next/link";
import { getAllTools, getCatalogStats } from "@/lib/tools";
import { CATEGORIES } from "@/data/taxonomy";
import MarketplaceGrid from "@/components/MarketplaceGrid";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const tools = getAllTools();
  const stats = getCatalogStats();
  const initialCategory =
    params.category && (CATEGORIES as string[]).includes(params.category)
      ? params.category
      : undefined;

  return (
    <div>
      <section className="py-12 text-center sm:py-16">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[0.72rem] font-bold uppercase tracking-wide text-brand dark:border-slate-800 dark:bg-slate-900">
          WASL AI Marketplace · v1.0
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
        <StatCard label="In Research" value={stats.byStatus.research ?? 0} />
        <StatCard label="In Production" value={stats.byStatus.production ?? 0} />
        <StatCard label="Categories Covered" value={`${stats.categoriesCovered}/${CATEGORIES.length}`} />
      </section>

      <section className="mb-10 rounded-2xl border border-risk-high/25 bg-risk-high/[0.06] p-6">
        <h3 className="mb-1.5 flex items-center gap-2 font-bold">🔴 Security &amp; Compliance Reminder</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          No AI project may receive sensitive WASL, banking, customer, employee, or regulated data until
          appropriate security, legal, and compliance approval is completed. No tool on this site is
          described as SAMA compliant, or officially &quot;secure,&quot; unless that has been formally
          reviewed and approved.
        </p>
      </section>

      <MarketplaceGrid tools={tools} initialCategory={initialCategory} />

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
