import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 py-16 text-center dark:border-slate-700">
      <h3 className="text-base font-bold">No tools match your filters</h3>
      <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500 dark:text-slate-400">
        Try a different search term or clear a filter, or{" "}
        <Link href="/suggest-tool" className="font-bold text-brand hover:underline">
          suggest a new AI tool
        </Link>{" "}
        if you know of something that should be here.
      </p>
    </div>
  );
}
