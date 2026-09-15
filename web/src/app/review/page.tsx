import Link from "next/link";
import { getReviewQueue } from "@/lib/tools";
import { PRIORITY_META } from "@/data/taxonomy";
import TypeBadge from "@/components/TypeBadge";
import SecurityBadge from "@/components/SecurityBadge";

export const metadata = {
  title: "Review Queue",
};

export default function ReviewQueuePage() {
  const queue = getReviewQueue();

  return (
    <div className="py-10 sm:py-14">
      <div className="mb-8">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-brand dark:border-slate-800 dark:bg-slate-900">
          For Maintainers
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Review Queue</h1>
        <p className="mt-2.5 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Every catalog entry still at 🔵 Research status, in the order the marketplace maintainers would
          look at them next: internal agents first (by recommended POC build order), then AI platforms.
          This page is a read-only view of the same catalog data shown on the homepage — it does not move
          anything through the governance pipeline by itself. See{" "}
          <a
            href="https://github.com/KhalidAzm1/wasl-ai-marketplace/blob/main/docs/governance.md"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand hover:underline"
          >
            the governance pipeline ↗
          </a>{" "}
          for what happens at each stage.
        </p>
      </div>

      {queue.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900">
          Nothing is currently at Research status.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-card dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-[0.72rem] font-bold uppercase tracking-wide text-slate-400 dark:border-slate-800">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Security</th>
                <th className="px-4 py-3">Priority</th>
                <th className="px-4 py-3">Last Reviewed</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {queue.map((tool, i) => (
                <tr
                  key={tool.id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-950"
                >
                  <td className="px-4 py-3 text-slate-400">{i + 1}</td>
                  <td className="px-4 py-3 font-bold">{tool.name}</td>
                  <td className="px-4 py-3">
                    <TypeBadge type={tool.type} />
                  </td>
                  <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{tool.category}</td>
                  <td className="px-4 py-3">
                    <SecurityBadge level={tool.securityLevel} />
                  </td>
                  <td className="px-4 py-3">
                    {tool.priority ? (
                      <span
                        className={`rounded-full px-2.5 py-1 text-[0.7rem] font-bold ${PRIORITY_META[tool.priority].bgClass} ${PRIORITY_META[tool.priority].textClass}`}
                      >
                        {tool.priority}
                      </span>
                    ) : (
                      <span className="text-slate-300 dark:text-slate-700">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-slate-400">{tool.lastReviewed}</td>
                  <td className="px-4 py-3 text-right">
                    <Link href={`/tools/${tool.id}`} className="font-bold text-brand hover:underline">
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="mt-6 text-[0.8rem] text-slate-400">
        Priority and POC order here reflect the marketplace maintainers&apos; initial assessment, not a
        committed schedule or leadership-approved roadmap.
      </p>
    </div>
  );
}
