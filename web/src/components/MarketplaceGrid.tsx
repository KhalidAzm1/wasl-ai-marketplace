"use client";

import { useMemo, useState } from "react";
import type { Tool } from "@/types/tool";
import { CATEGORIES, DEPARTMENTS, STATUS_FILTERS, STATUS_META } from "@/data/taxonomy";
import ToolCard from "./ToolCard";
import EmptyState from "./EmptyState";

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[0.8rem] font-semibold transition-colors ${
        active
          ? "border-brand bg-brand text-white"
          : "border-slate-300 bg-white text-slate-600 hover:border-brand hover:text-brand dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
      }`}
    >
      {children}
    </button>
  );
}

export default function MarketplaceGrid({
  tools,
  initialCategory,
}: {
  tools: Tool[];
  initialCategory?: string;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(initialCategory ?? "all");
  const [status, setStatus] = useState<string>("all");
  const [department, setDepartment] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((t) => {
      const matchesQuery =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        (t.secondaryCategory ?? "").toLowerCase().includes(q);
      const matchesCategory =
        category === "all" || t.category === category || t.secondaryCategory === category;
      const matchesStatus = status === "all" || t.status === status;
      const matchesDepartment = department === "all" || t.departments.includes(department as never);
      return matchesQuery && matchesCategory && matchesStatus && matchesDepartment;
    });
  }, [tools, query, category, status, department]);

  return (
    <div>
      <div className="mx-auto mb-6 max-w-xl">
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tools, e.g. “RAG”, “Dify”, “compliance”…"
            className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-4 text-sm shadow-card outline-none transition-shadow focus:border-brand focus:ring-4 focus:ring-brand/15 dark:border-slate-700 dark:bg-slate-900"
          />
        </div>
      </div>

      <div className="mb-2.5 flex flex-wrap justify-center gap-2">
        <Chip active={category === "all"} onClick={() => setCategory("all")}>
          All Categories
        </Chip>
        {CATEGORIES.map((c) => (
          <Chip key={c} active={category === c} onClick={() => setCategory(c)}>
            {c}
          </Chip>
        ))}
      </div>

      <div className="mb-2.5 flex flex-wrap justify-center gap-2">
        <Chip active={status === "all"} onClick={() => setStatus("all")}>
          All Statuses
        </Chip>
        {STATUS_FILTERS.map((s) => (
          <Chip key={s} active={status === s} onClick={() => setStatus(s)}>
            {STATUS_META[s].emoji} {STATUS_META[s].label}
          </Chip>
        ))}
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <Chip active={department === "all"} onClick={() => setDepartment("all")}>
          All Departments
        </Chip>
        {DEPARTMENTS.map((d) => (
          <Chip key={d} active={department === d} onClick={() => setDepartment(d)}>
            {d}
          </Chip>
        ))}
      </div>

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-extrabold tracking-tight">Browse Tools</h2>
        <span className="text-[0.8rem] font-semibold text-slate-400">
          {filtered.length} tool{filtered.length === 1 ? "" : "s"}
        </span>
      </div>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}
