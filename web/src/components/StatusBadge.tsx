import { STATUS_META } from "@/data/taxonomy";
import type { ToolStatus } from "@/types/tool";

export default function StatusBadge({ status }: { status: ToolStatus }) {
  const meta = STATUS_META[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-bold ${meta.textClass} ${meta.bgClass}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${meta.dotClass}`} />
      {meta.emoji} {meta.label}
    </span>
  );
}
