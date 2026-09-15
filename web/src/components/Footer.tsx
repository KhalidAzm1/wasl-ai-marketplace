import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap justify-between gap-8">
          <div>
            <h4 className="mb-2.5 text-[0.72rem] font-bold uppercase tracking-wide text-slate-400">
              Marketplace
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><Link href="/" className="hover:text-brand">Home</Link></li>
              <li><Link href="/suggest-tool" className="hover:text-brand">Suggest a Tool</Link></li>
              <li><Link href="/request-access" className="hover:text-brand">Request Access</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2.5 text-[0.72rem] font-bold uppercase tracking-wide text-slate-400">
              Categories
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><Link href="/?category=AI+Assistants" className="hover:text-brand">AI Assistants</Link></li>
              <li><Link href="/?category=Automation" className="hover:text-brand">Automation</Link></li>
              <li><Link href="/?category=Developers" className="hover:text-brand">Developers</Link></li>
              <li><Link href="/?category=Compliance+%26+Legal" className="hover:text-brand">Compliance &amp; Legal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2.5 text-[0.72rem] font-bold uppercase tracking-wide text-slate-400">
              Governance (GitHub)
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><a href="https://github.com/KhalidAzm1/wasl-ai-marketplace" target="_blank" rel="noopener noreferrer" className="hover:text-brand">Repository ↗</a></li>
              <li><a href="https://github.com/KhalidAzm1/wasl-ai-marketplace/blob/main/docs/governance.md" target="_blank" rel="noopener noreferrer" className="hover:text-brand">Governance Process ↗</a></li>
              <li><a href="https://github.com/KhalidAzm1/wasl-ai-marketplace/blob/main/docs/security.md" target="_blank" rel="noopener noreferrer" className="hover:text-brand">Security Classification ↗</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2.5 text-[0.72rem] font-bold uppercase tracking-wide text-slate-400">
              Upstream Projects
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><a href="https://github.com/langgenius/dify" target="_blank" rel="noopener noreferrer" className="hover:text-brand">Dify ↗</a></li>
              <li><a href="https://github.com/Mintplex-Labs/anything-llm" target="_blank" rel="noopener noreferrer" className="hover:text-brand">AnythingLLM ↗</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-5 text-center text-[0.78rem] text-slate-400 dark:border-slate-800">
          WASL AI Marketplace v1.0 — Internal use only. Not for external distribution.
        </div>
      </div>
    </footer>
  );
}
