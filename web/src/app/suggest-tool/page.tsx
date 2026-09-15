import type { Metadata } from "next";
import SuggestToolForm from "@/components/SuggestToolForm";

export const metadata: Metadata = { title: "Suggest a Tool" };

export default async function SuggestToolPage({
  searchParams,
}: {
  searchParams: Promise<{ feedback_for?: string }>;
}) {
  const params = await searchParams;
  return (
    <div className="mx-auto max-w-2xl py-12">
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[0.72rem] font-bold uppercase tracking-wide text-brand dark:border-slate-800 dark:bg-slate-900">
        Grow the Catalog
      </span>
      <h1 className="text-2xl font-extrabold sm:text-3xl">
        {params.feedback_for ? "Submit Feedback" : "Suggest a New AI Tool"}
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        {params.feedback_for
          ? `Share feedback or corrections about ${params.feedback_for}.`
          : "Know a useful open-source AI project, agent, or automation that isn't in the catalog yet? Submit it for review."}
      </p>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
        <h3 className="mb-1 font-bold">📝 How this works</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Suggestions are recorded and reviewed by the WASL AI Marketplace maintainers. Once confirmed as a
          legitimate, maintained project, it is added to the catalog at 🔵 Research status and moves through
          the standard governance process.
        </p>
      </div>

      <div className="mt-8">
        <SuggestToolForm defaultFeedbackFor={params.feedback_for} />
      </div>
    </div>
  );
}
