import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-3xl font-extrabold">404</h1>
      <p className="mx-auto mt-3 max-w-sm text-sm text-slate-500 dark:text-slate-400">
        This page doesn&apos;t exist. It may have moved, or the link may be out of date.
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
