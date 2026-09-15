import type { Metadata } from "next";
import RequestAccessForm from "@/components/RequestAccessForm";
import { getAllTools } from "@/lib/tools";

export const metadata: Metadata = { title: "Request Access" };

export default async function RequestAccessPage({
  searchParams,
}: {
  searchParams: Promise<{ tool?: string }>;
}) {
  const params = await searchParams;
  const anyResearch = getAllTools().some((t) => t.status === "research" || t.status === "pilot");

  return (
    <div className="mx-auto max-w-2xl py-12">
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[0.72rem] font-bold uppercase tracking-wide text-brand dark:border-slate-800 dark:bg-slate-900">
        Get Access
      </span>
      <h1 className="text-2xl font-extrabold sm:text-3xl">Request Access to an AI Tool</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Access is granted for ✅ Approved and 🟢 Production tools, for their defined use cases.
      </p>

      {anyResearch && (
        <div className="mt-6 rounded-2xl border border-risk-high/25 bg-risk-high/[0.06] p-5">
          <h3 className="mb-1 font-bold">🔴 Important</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Both catalog tools today (Dify and AnythingLLM) are at 🔵 <strong>Research</strong> status —
            neither is approved for employee use yet. Requests submitted now are logged as expressions of
            interest to help prioritize evaluation, not as immediate access grants.
          </p>
        </div>
      )}

      <div className="mt-8">
        <RequestAccessForm defaultTool={params.tool} />
      </div>
    </div>
  );
}
