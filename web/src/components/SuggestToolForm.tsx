"use client";

import { useState } from "react";
import { CATEGORIES } from "@/data/taxonomy";

export default function SuggestToolForm({ defaultFeedbackFor }: { defaultFeedbackFor?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/suggest-tool", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          toolName: payload.toolName,
          url: payload.url,
          problem: payload.problem,
          beneficiaries: payload.beneficiaries,
          department: payload.department,
          useCase: payload.useCase,
          requiresCompanyData: payload.requiresCompanyData,
          requiresCustomerData: payload.requiresCustomerData,
          selfHosted: payload.selfHosted,
          additionalNotes: payload.additionalNotes,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Something went wrong");
      setMessage(data.message ?? "Your suggestion was submitted.");
      setStatus("done");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-risk-low/30 bg-risk-low/10 p-6 text-center">
        <h3 className="text-lg font-extrabold">✅ Suggestion submitted</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Tool / Project Name" name="toolName" required />
      <Field label="GitHub URL / Website" name="url" required={false} placeholder="https://…" />
      <TextArea
        label="What problem does it solve?"
        name="problem"
        required
        {...(defaultFeedbackFor ? { defaultValue: `Feedback on ${defaultFeedbackFor}: ` } : {})}
      />
      <TextArea label="Who could benefit?" name="beneficiaries" required />
      <Select label="Suggested Department" name="department" required options={CATEGORIES} />
      <TextArea label="Suggested Use Case" name="useCase" required />
      <Select
        label="Does it require company data?"
        name="requiresCompanyData"
        required
        options={["No", "Yes — internal/operational only", "Yes — sensitive or regulated data", "Not sure"]}
      />
      <Select
        label="Does it require customer data?"
        name="requiresCustomerData"
        required
        options={["No", "Yes", "Not sure"]}
      />
      <Select
        label="Can it be self-hosted?"
        name="selfHosted"
        required
        options={["Yes", "No", "Partially", "Not sure"]}
      />
      <TextArea label="Additional Notes" name="additionalNotes" required={false} />

      {status === "error" && (
        <p className="rounded-lg border border-risk-high/30 bg-risk-high/10 px-3.5 py-2.5 text-sm text-risk-high">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-brand px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit Suggestion"}
      </button>
      <p className="text-center text-[0.78rem] text-slate-400">
        Please do not include sensitive WASL data, customer data, or credentials in your suggestion.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  required: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold">
        {label} {required && <span className="text-risk-high">*</span>}
      </span>
      <input
        type="text"
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 dark:border-slate-700 dark:bg-slate-900"
      />
    </label>
  );
}

function TextArea({
  label,
  name,
  required,
  defaultValue,
}: {
  label: string;
  name: string;
  required: boolean;
  defaultValue?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold">
        {label} {required && <span className="text-risk-high">*</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={3}
        defaultValue={defaultValue}
        className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 dark:border-slate-700 dark:bg-slate-900"
      />
    </label>
  );
}

function Select({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required: boolean;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold">
        {label} {required && <span className="text-risk-high">*</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 dark:border-slate-700 dark:bg-slate-900"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
