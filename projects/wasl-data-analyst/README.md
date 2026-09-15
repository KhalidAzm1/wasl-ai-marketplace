# WASL Data Analyst

> Ask a business question in plain language, get a safe, read-only data answer.

| Field | Value |
|---|---|
| **Type** | Internal WASL Agent Concept (not a separate external project) |
| **Category** | Data & Analytics / AI Assistants |
| **Status** | 🔵 Research |
| **Security Classification** | 🔴 High Risk *(initial classification, pending formal Security Review)* |
| **Priority (initial assessment)** | Very High |
| **Recommended POC Order** | 3 of 10 (see [POC Roadmap](../../docs/governance.md)) |
| **Human Approval Required** | Yes |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | Management, Data team, Product, Finance, Operations |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Concept Notice

**This is a proposed internal WASL AI Agent concept — not a deployed product, not a separate external GitHub project, and not currently built.** It is being evaluated as one of ten department agent concepts added to the WASL AI Marketplace in v1.1. Nothing described on this page is deployed, approved, or connected to WASL production data. All capabilities, integrations, and workflows below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

This agent is envisioned as one instance of WASL's **shared internal agent platform** — built primarily with Replit (employee-facing UI), n8n (orchestration and integrations), Azure OpenAI (LLM reasoning), and Azure AI Search (approved internal knowledge / RAG) — rather than bespoke, one-off infrastructure. See [`/web/docs/architecture.md`](../../web/docs/architecture.md) for the full shared-platform design.

## Business Problem

Non-technical employees and managers who need a data answer currently have to request it from the data team or write their own queries, creating a bottleneck for routine business questions.

## What It Does

A proposed AI agent that turns natural-language business questions into safe, read-only queries against approved data sources, executes them, and returns charts, tables, KPI calculations, trend analysis, and executive summaries.

## Why WASL Is Evaluating It

If evaluation succeeds, this could give managers and analysts faster self-service access to business data while enforcing strict read-only, allowlisted access so no report can accidentally modify production data.

## Main Capabilities (Proposed)

- Natural-language data questions
- Safe read-only SQL generation
- Query execution
- Data analysis
- KPI calculations
- Charts
- Tables
- Executive summaries
- Scheduled reports
- Trend analysis
- Anomaly detection

## Example Use Cases (Proposed, Not Deployed)

- "How many financing requests were completed over the last three months and how does performance compare by bank?"
- Generate a weekly KPI dashboard summary for leadership
- Detect anomalies in a defined metric and alert the owning team

## Example Workflow

Question -> Validate request -> Generate safe query -> Read-only execution -> Analyze -> Chart / Table -> Executive summary.

## Suggested Architecture

This agent is proposed to follow WASL's shared agent platform pattern:

```
Employee
  -> WASL Marketplace / Replit App
  -> n8n
  -> Agent Logic
  -> Azure OpenAI + Azure AI Search + Approved Internal Systems
  -> Output / Action / Human Approval
```

- **Replit (employee UI):** Chat UI for asking questions and viewing generated charts, tables, and summaries.
- **n8n (orchestration/integrations):** Validates requests against an approved-query allowlist, executes read-only queries, and schedules recurring reports.
- **Azure OpenAI (LLM reasoning):** Translates natural-language questions into safe queries and generates analysis/summaries from results.
- **Azure AI Search (RAG/knowledge):** Optional: retrieval over data dictionary/metric definitions so the agent answers using WASL's actual KPI definitions.

## Integration Options (Proposed)

- Azure OpenAI
- approved databases / BI sources
- n8n scheduled reporting

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

Data access must be read-only by default and limited to explicitly approved data sources. No write access, and no customer/banking-sensitive fields should be exposed until Security and Compliance review is complete.

## Security Considerations

This agent has not yet undergone a formal WASL Security Review. Provisional classification only, pending review. Given the breadth of business data this agent could touch, it is provisionally classified High Risk and must enforce read-only access by default.

## Compliance Considerations

Not yet reviewed by Compliance/Legal. This concept has not been assessed for SAMA relevance and must not be described as compliant with any regulatory framework, approved, or production-ready until that review happens.

## Saudi Data Residency Considerations

Not yet verified. If built on Azure infrastructure within a Saudi Arabia region with in-region Azure OpenAI and Azure AI Search deployments, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review.

## Human Approval Requirements

**Yes — human approval is required** before any irreversible action, external communication, financial transaction, or write to a system of record. This agent only proposes; a human confirms.

## Target Users / Departments

Management, Data & Analytics, Product & Business, Finance, Operations

## Proof of Concept Status

No POC has been conducted yet. This entry reflects an initial concept write-up only.

## POC Recommendation

This agent is ranked **#3 of 10** in the marketplace maintainers' recommended internal-agent build order (see the POC Roadmap in [`/docs/governance.md`](../../docs/governance.md) and on the marketplace homepage). This is an initial recommendation only, pending PMO/leadership sign-off — not a committed schedule.

## How to Use

This agent is a Research-stage concept only. It is not built and not available for employee use. Interested employees should use Request Access below to register interest and help prioritize which agent gets built first.

## How to Request Access

Use the [**Request Access to AI Tool**](../../.github/ISSUE_TEMPLATE/request-access.yml) issue form. Since this concept is at Research status, requests will currently be logged as expressions of interest to help prioritize which agent gets built first, rather than resulting in immediate access.

## Internal WASL Notes

Added to the marketplace as part of the v1.1 department-agent expansion. Not yet scoped for a POC — the next step, if prioritized, is a focused proof of concept on the single highest-value capability listed above, using non-sensitive or synthetic data until Security and Compliance review is complete.

## Review History

| Date | Reviewer | Notes |
|---|---|---|
| 2026-09-15 | WASL AI Marketplace maintainers | Initial catalog entry created at 🔵 Research status as part of WASL AI Marketplace v1.1. No security or compliance review has been performed yet. |
