import Link from "next/link";
import type { Tool } from "@/types/tool";
import StatusBadge from "./StatusBadge";
import SecurityBadge from "./SecurityBadge";
import TypeBadge from "./TypeBadge";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article
      className={`animate-fadeUp flex flex-col gap-3.5 rounded-2xl border bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover dark:bg-slate-900 ${
        tool.type === "internal-agent"
          ? "border-brand/30 dark:border-brand/40"
          : "border-slate-200 dark:border-slate-800"
      }`}
    >
      <div className="flex items-start justify-between gap-2.5">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] text-sm font-extrabold text-white"
          style={{ backgroundColor: tool.color }}
        >
          {tool.initials}
        </div>
        <StatusBadge status={tool.status} />
      </div>

      <div>
        <h3 className="text-[1.05rem] font-extrabold leading-tight">{tool.name}</h3>
        <div className="mt-0.5 text-[0.72rem] font-semibold uppercase tracking-wide text-slate-400">
          {tool.category}
          {tool.secondaryCategory ? ` · ${tool.secondaryCategory}` : ""}
        </div>
      </div>

      <p className="flex-1 text-sm text-slate-600 dark:text-slate-300">{tool.description}</p>

      <div className="flex flex-wrap gap-2">
        <TypeBadge type={tool.type} />
        <SecurityBadge level={tool.securityLevel} />
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-3.5 dark:border-slate-800">
        <span className="text-[0.72rem] font-semibold text-slate-400">{tool.targetUsers}</span>
        <div className="flex gap-2">
          <Link
            href={`/tools/${tool.id}`}
            className="rounded-lg bg-brand px-3 py-1.5 text-[0.76rem] font-bold text-white transition-colors hover:bg-brand-dark"
          >
            View Tool
          </Link>
        </div>
      </div>
    </article>
  );
}
