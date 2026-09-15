import { SECURITY_META } from "@/data/taxonomy";
import type { SecurityLevel } from "@/types/tool";

export default function SecurityBadge({ level }: { level: SecurityLevel }) {
  const meta = SECURITY_META[level];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-bold ${meta.textClass} ${meta.bgClass}`}>
      {meta.emoji} {meta.label}
    </span>
  );
}
