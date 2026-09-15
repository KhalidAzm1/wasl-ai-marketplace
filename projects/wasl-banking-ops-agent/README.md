# WASL Banking Ops Agent

> See which financing requests need manual action today, without manually checking each one.

| Field | Value |
|---|---|
| **Type** | Internal WASL Agent Concept (not a separate external project) |
| **Category** | Banking / Operations / Data & Analytics |
| **Status** | 🔵 Research |
| **Security Classification** | 🔴 High Risk *(initial classification, pending formal Security Review)* |
| **Priority (initial assessment)** | Very High |
| **Recommended POC Order** | 5 of 10 (see [POC Roadmap](../../docs/governance.md)) |
| **Human Approval Required** | Yes |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | Banking operations, Product, Operations, Management |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Concept Notice

**This is a proposed internal WASL AI Agent concept — not a deployed product, not a separate external GitHub project, and not currently built.** It is being evaluated as one of ten department agent concepts added to the WASL AI Marketplace in v1.1. Nothing described on this page is deployed, approved, or connected to WASL production data. All capabilities, integrations, and workflows below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

This agent is envisioned as one instance of WASL's **shared internal agent platform** — built primarily with Replit (employee-facing UI), n8n (orchestration and integrations), Azure OpenAI (LLM reasoning), and Azure AI Search (approved internal knowledge / RAG) — rather than bespoke, one-off infrastructure. See [`/web/docs/architecture.md`](../../web/docs/architecture.md) for the full shared-platform design.

## Business Problem

Banking operations staff manually review financing requests to find which ones need action, are missing documentation, or are at SLA risk — a repetitive triage task across potentially large request volumes.

## What It Does

A proposed AI agent that monitors financing request status and SLA performance, detects missing information and exceptions, and surfaces a prioritized list of requests needing manual action, along with bank performance comparisons.

## Why WASL Is Evaluating It

If evaluation succeeds, this could speed up operational triage and reduce SLA misses by surfacing at-risk requests earlier, while all actual request decisions and actions remain with human operations staff.

## Main Capabilities (Proposed)

- Financing request monitoring
- Request status analysis
- SLA monitoring
- Pending requests
- Requests needing action
- Missing information detection
- Exception identification
- Operational alerts
- Bank performance comparison
- Request summaries

## Example Use Cases (Proposed, Not Deployed)

- "Which requests require manual action today?"
- Flag financing requests missing required documentation
- Compare SLA performance across partner banks

## Example Workflow

Financing Requests -> Status -> SLA -> Missing Documents -> Exceptions -> Prioritize -> Display Requests Requiring Action to the operations team for human handling.

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

- **Replit (employee UI):** Operations dashboard showing prioritized requests needing action, SLA status, and exceptions.
- **n8n (orchestration/integrations):** Monitors financing request data on a schedule, detects exceptions/missing info, and raises operational alerts.
- **Azure OpenAI (LLM reasoning):** Analyzes request status/exceptions and drafts prioritized summaries for the operations team.
- **Azure AI Search (RAG/knowledge):** Not primary to this agent; may be added later for retrieval over banking-ops procedures.

## Integration Options (Proposed)

- Azure OpenAI
- banking APIs / approved data (proposed)
- n8n monitoring workflows

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

Financing request data is sensitive banking-operational data. Only approved, non-production or explicitly cleared data sources should be connected until Security and Compliance review is complete.

## Security Considerations

This agent has not yet undergone a formal WASL Security Review. Provisional classification only, pending review. Given the sensitivity of banking operations data, this agent is provisionally classified High Risk.

## Compliance Considerations

Not yet reviewed by Compliance/Legal. This concept has not been assessed for SAMA relevance and must not be described as compliant with any regulatory framework, approved, or production-ready until that review happens.

## Saudi Data Residency Considerations

Not yet verified. If built on Azure infrastructure within a Saudi Arabia region with in-region Azure OpenAI and Azure AI Search deployments, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review.

## Human Approval Requirements

**Yes — human approval is required** before any irreversible action, external communication, financial transaction, or write to a system of record. This agent only proposes; a human confirms.

## Target Users / Departments

Banking Operations, Product & Business, Operations, Management

## Proof of Concept Status

No POC has been conducted yet. This entry reflects an initial concept write-up only.

## POC Recommendation

This agent is ranked **#5 of 10** in the marketplace maintainers' recommended internal-agent build order (see the POC Roadmap in [`/docs/governance.md`](../../docs/governance.md) and on the marketplace homepage). This is an initial recommendation only, pending PMO/leadership sign-off — not a committed schedule.

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
