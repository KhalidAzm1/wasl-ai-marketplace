"use client";

import { useState } from "react";
import { getAllTools } from "@/lib/tools";

const tools = getAllTools();

export default function RequestAccessForm({ defaultTool }: { defaultTool?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/request-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employeeName: payload.employeeName,
          department: payload.department,
          toolRequested: payload.toolRequested,
          businessUseCase: payload.businessUseCase,
          expectedFrequency: payload.expectedFrequency,
          dataType: payload.dataType,
          managerApproval: payload.managerApproval,
          additionalInfo: payload.additionalInfo,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Something went wrong");
      setMessage(data.message ?? "Your request was submitted.");
      setStatus("done");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-risk-low/30 bg-risk-low/10 p-6 text-center">
        <h3 className="text-lg font-extrabold">✅ Request submitted</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Employee Name" name="employeeName" required />
      <Field label="Department" name="department" required />
      <Field label="Tool Requested" name="toolRequested" required defaultValue={defaultTool}>
        {tools.length > 0 && (
          <datalist id="tool-options">
            {tools.map((t) => (
              <option key={t.id} value={t.name} />
            ))}
          </datalist>
        )}
      </Field>
      <TextArea label="Business Use Case" name="businessUseCase" required />
      <Select
        label="Expected Frequency of Use"
        name="expectedFrequency"
        required
        options={["Daily", "Weekly", "Monthly", "Occasional / one-off"]}
      />
      <Select
        label="Type of Data Involved"
        name="dataType"
        required
        options={[
          "No sensitive data (public/synthetic only)",
          "Internal/operational data (non-sensitive)",
          "Customer data",
          "Financial/banking data",
          "Employee/HR data",
          "Other regulated data",
        ]}
      />
      <Select
        label="Manager Approval Required?"
        name="managerApproval"
        required
        options={["Yes — attached/pending", "Yes — already obtained", "Not sure", "No"]}
      />
      <TextArea label="Additional Information" name="additionalInfo" required={false} />

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
        {status === "submitting" ? "Submitting…" : "Submit Request"}
      </button>
      <p className="text-center text-[0.78rem] text-slate-400">
        Please do not include passwords, API keys, or sensitive customer/employee data in this form.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  required,
  defaultValue,
  children,
}: {
  label: string;
  name: string;
  required: boolean;
  defaultValue?: string;
  children?: React.ReactNode;
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
        defaultValue={defaultValue}
        list={children ? "tool-options" : undefined}
        className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 dark:border-slate-700 dark:bg-slate-900"
      />
      {children}
    </label>
  );
}

function TextArea({ label, name, required }: { label: string; name: string; required: boolean }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold">
        {label} {required && <span className="text-risk-high">*</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={3}
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
