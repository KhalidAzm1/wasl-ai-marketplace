import Link from "next/link";

export default function ToolNotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-2xl font-extrabold">Tool not found</h1>
      <p className="mx-auto mt-3 max-w-sm text-sm text-slate-500 dark:text-slate-400">
        We couldn&apos;t find a tool with that identifier.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-dark"
      >
        Return to the marketplace
      </Link>
    </div>
  );
}
