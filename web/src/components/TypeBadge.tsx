import { TOOL_TYPE_META } from "@/data/taxonomy";
import type { ToolType } from "@/types/tool";

/**
 * Distinguishes a WASL-specific internal agent concept from a third-party/open-source
 * platform WASL is evaluating, so employees never confuse the two on a card or detail page.
 */
export default function TypeBadge({ type }: { type: ToolType }) {
  const meta = TOOL_TYPE_META[type];
  const isInternal = type === "internal-agent";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-bold ${
        isInternal
          ? "bg-brand/10 text-brand"
          : "bg-slate-500/10 text-slate-500 dark:text-slate-400"
      }`}
    >
      {isInternal ? "🧩" : "🔌"} {meta.shortLabel}
    </span>
  );
}
