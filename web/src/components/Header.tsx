import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-extrabold tracking-tight">
          {/* LOGO PLACEHOLDER: swap this text-only mark for the official WASL logo image once available. */}
          <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-gradient-to-br from-brand to-accent text-[0.7rem] font-extrabold text-white">
            WASL
          </span>
          <span className="text-[0.95rem]">WASL AI Marketplace</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex dark:text-slate-300">
          <Link href="/" className="transition-colors hover:text-brand dark:hover:text-brand-light">
            Marketplace
          </Link>
          <Link href="/suggest-tool" className="transition-colors hover:text-brand dark:hover:text-brand-light">
            Suggest a Tool
          </Link>
          <Link href="/request-access" className="transition-colors hover:text-brand dark:hover:text-brand-light">
            Request Access
          </Link>
        </nav>

        <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-[0.7rem] font-bold text-slate-500 sm:inline-flex dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
          🔒 Internal &amp; Private
        </span>
      </div>
    </header>
  );
}
