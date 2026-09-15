# WASL Finance Ops Agent

> Ask finance questions in plain language and get analysis, not manual spreadsheet work.

| Field | Value |
|---|---|
| **Type** | Internal WASL Agent Concept (not a separate external project) |
| **Category** | Finance / Data & Analytics |
| **Status** | 🔵 Research |
| **Security Classification** | 🔴 High Risk *(initial classification, pending formal Security Review)* |
| **Priority (initial assessment)** | High |
| **Recommended POC Order** | 6 of 10 (see [POC Roadmap](../../docs/governance.md)) |
| **Human Approval Required** | Yes |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | Finance team, Accounting, Management |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Concept Notice

**This is a proposed internal WASL AI Agent concept — not a deployed product, not a separate external GitHub project, and not currently built.** It is being evaluated as one of ten department agent concepts added to the WASL AI Marketplace in v1.1. Nothing described on this page is deployed, approved, or connected to WASL production data. All capabilities, integrations, and workflows below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

This agent is envisioned as one instance of WASL's **shared internal agent platform** — built primarily with Replit (employee-facing UI), n8n (orchestration and integrations), Azure OpenAI (LLM reasoning), and Azure AI Search (approved internal knowledge / RAG) — rather than bespoke, one-off infrastructure. See [`/web/docs/architecture.md`](../../web/docs/architecture.md) for the full shared-platform design.

## Business Problem

Finance team members spend significant manual effort reconciling, classifying, and comparing financial data across spreadsheets and systems, with no shared AI-assisted tooling to speed up routine analysis.

## What It Does

A proposed AI agent that analyzes uploaded or connected finance files (Excel/CSV/structured data), classifies expenses, compares periods, flags anomalies and variances, tracks receivables and payments, and produces management-ready summaries — with any financial action or irreversible transaction requiring explicit human approval.

## Why WASL Is Evaluating It

If evaluation succeeds, this could reduce the manual reporting burden on Finance and surface issues (unpaid invoices, abnormal expense growth) faster than manual review, while keeping every real financial action behind human sign-off.

## Main Capabilities (Proposed)

- Analyze Excel / CSV / structured finance files
- Expense classification
- Month-to-month comparisons
- Invoice analysis
- Reconciliation assistance
- Receivables monitoring
- Payment tracking
- Financial summaries
- Variance analysis
- Anomaly detection
- Management reports
- Scheduled finance reporting

## Example Use Cases (Proposed, Not Deployed)

- "Compare this month's expenses with last month."
- "Show me unpaid invoices."
- "Which expense categories increased abnormally?"
- Generate a scheduled weekly management finance summary
- Flag anomalies in an uploaded expense report for human review

## Example Workflow

Employee uploads or points to an approved finance file -> Agent classifies/analyzes -> produces summary, variance, or anomaly flags -> any downstream action (payment, adjustment) requires explicit human approval before execution.

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

- **Replit (employee UI):** Employee UI for uploading finance files, viewing summaries/charts, and approving flagged items.
- **n8n (orchestration/integrations):** Scheduled report generation, file ingestion pipeline, and routing of anomalies to a human reviewer.
- **Azure OpenAI (LLM reasoning):** Classification, comparison, variance and anomaly analysis, and natural-language summaries.
- **Azure AI Search (RAG/knowledge):** Not primary to this agent; may be added later for policy lookups (e.g. expense policy Q&A).

## Integration Options (Proposed)

- Azure OpenAI
- approved finance data sources
- n8n scheduled jobs

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

Finance data is inherently sensitive. Only approved, non-production or explicitly cleared finance data sources should be connected until Security and Compliance review is complete. No production financial system should be connected during Research/POC stages.

## Security Considerations

This agent has not yet undergone a formal WASL Security Review. Provisional classification only, pending review. Given the sensitivity of financial data, this agent is provisionally classified High Risk.

## Compliance Considerations

Not yet reviewed by Compliance/Legal. This concept has not been assessed for SAMA relevance and must not be described as compliant with any regulatory framework, approved, or production-ready until that review happens.

## Saudi Data Residency Considerations

Not yet verified. If built on Azure infrastructure within a Saudi Arabia region with in-region Azure OpenAI and Azure AI Search deployments, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review.

## Human Approval Requirements

**Yes — human approval is required** before any irreversible action, external communication, financial transaction, or write to a system of record. This agent only proposes; a human confirms.

## Target Users / Departments

Finance, Accounting, Management

## Proof of Concept Status

No POC has been conducted yet. This entry reflects an initial concept write-up only.

## POC Recommendation

This agent is ranked **#6 of 10** in the marketplace maintainers' recommended internal-agent build order (see the POC Roadmap in [`/docs/governance.md`](../../docs/governance.md) and on the marketplace homepage). This is an initial recommendation only, pending PMO/leadership sign-off — not a committed schedule.

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
