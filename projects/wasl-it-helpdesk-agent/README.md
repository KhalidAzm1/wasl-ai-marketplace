# WASL IT Helpdesk Agent

> A first line of IT support, grounded in WASL's own documentation.

| Field | Value |
|---|---|
| **Type** | Internal WASL Agent Concept (not a separate external project) |
| **Category** | Automation / Developers |
| **Status** | 🔵 Research |
| **Security Classification** | 🟡 Medium Risk *(initial classification, pending formal Security Review)* |
| **Priority (initial assessment)** | Medium |
| **Recommended POC Order** | 11 of 14 (see [POC Roadmap](../../docs/governance.md)) |
| **Human Approval Required** | Yes |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | All Employees, IT Support team |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Concept Notice

**This is a proposed internal WASL AI Agent concept — not a deployed product, not a separate external GitHub project, and not currently built.** It is being evaluated as one of the internal agent concepts added to the WASL AI Marketplace in v1.2. Nothing described on this page is deployed, approved, or connected to WASL production data. All capabilities, integrations, and workflows below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

This agent is envisioned as one instance of WASL's **shared internal agent platform** — built primarily with Replit (employee-facing UI), n8n (orchestration and integrations), Azure OpenAI (LLM reasoning), and Azure AI Search (approved internal knowledge / RAG) — rather than bespoke, one-off infrastructure. See [`/web/docs/architecture.md`](../../web/docs/architecture.md) for the full shared-platform design.

## Business Problem

IT support handles a high volume of repetitive, well-documented requests (password resets, VPN setup, common error messages) that consume technician time better spent on complex issues.

## What It Does

A proposed AI agent that answers common IT questions using WASL's own approved IT documentation, triages incoming requests by type and urgency, drafts ticket summaries for the IT queue, and routes anything it cannot confidently resolve to a human technician with full context attached — never resolving or closing a ticket on its own.

## Why WASL Is Evaluating It

If evaluation succeeds, this could reduce time-to-answer for common IT questions and give the IT team pre-triaged, well-summarized tickets instead of raw unstructured requests — while every actual fix or system change still requires a human technician.

## Main Capabilities (Proposed)

- Answer common IT troubleshooting questions from approved internal documentation
- Triage and categorize incoming IT support requests
- Draft a ticket summary and suggested priority for the IT team
- Route requests that need a human technician, with context attached
- Track basic request status and follow up

## Example Use Cases (Proposed, Not Deployed)

- Employee asks how to reset a password or set up VPN access, gets a grounded answer immediately
- A ticket comes in via Teams or email; the agent drafts a categorized, prioritized summary for the IT queue
- Recurring issue pattern detected across multiple tickets, flagged for the IT team to investigate root cause

## Example Workflow

Employee message (Teams/email) -> n8n Trigger -> IT Helpdesk Agent -> Azure AI Search (IT knowledge base) -> Draft answer or ticket summary -> Human IT technician confirms/dispatches -> Employee notified.

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

- **Replit (employee UI):** Employee-facing chat widget and an IT-team dashboard showing triaged/pending tickets.
- **n8n (orchestration/integrations):** Receives incoming requests from Teams/email, orchestrates triage, and routes confirmed tickets into the IT queue.
- **Azure OpenAI (LLM reasoning):** Classifies request type/priority and drafts the initial answer or ticket summary.
- **Azure AI Search (RAG/knowledge):** Retrieval over approved internal IT documentation, runbooks, and past resolved-ticket knowledge.

## Integration Options (Proposed)

- Microsoft Teams
- Email
- Internal IT ticketing system
- Azure OpenAI
- Azure AI Search

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

This agent would read IT documentation and ticket content, which may include employee device/account details. Only approved, non-sensitive IT documentation should be indexed until a Security and Compliance review is complete.

## Security Considerations

This agent has not yet undergone a formal WASL Security Review. Provisional classification only, pending review.

## Compliance Considerations

Not yet reviewed by Compliance/Legal. Not assessed for SAMA relevance and must not be described as compliant with any regulatory framework, approved, or production-ready until that review happens.

## Saudi Data Residency Considerations

Not yet verified. If built on Azure infrastructure within a Saudi Arabia region with in-region Azure OpenAI and Azure AI Search deployments, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review.

## Human Approval Requirements

**Yes — human approval is required** before any irreversible action, external communication, financial transaction, or write to a system of record. This agent only proposes; a human confirms.

## Target Users / Departments

All Employees, Developers, Engineering, Management

## Proof of Concept Status

No POC has been conducted yet. This entry reflects an initial concept write-up only.

## POC Recommendation

This agent is ranked **#11 of 14** in the marketplace maintainers' recommended internal-agent build order (see the POC Roadmap in [`/docs/governance.md`](../../docs/governance.md) and on the marketplace homepage). This is an initial recommendation only, pending PMO/leadership sign-off — not a committed schedule.

## How to Use

This agent is a Research-stage concept only. It is not built and not available for employee use. Interested employees should use Request Access below to register interest and help prioritize which agent gets built first.

## How to Request Access

Use the [**Request Access to AI Tool**](../../.github/ISSUE_TEMPLATE/request-access.yml) issue form. Since this concept is at Research status, requests will currently be logged as expressions of interest to help prioritize which agent gets built first, rather than resulting in immediate access.

## Internal WASL Notes

Added to the marketplace as part of the v1.2 department-agent expansion. Not yet scoped for a POC — the next step, if prioritized, is a focused proof of concept on the single highest-value capability listed above, using non-sensitive or synthetic data until Security and Compliance review is complete.

## Review History

| Date | Reviewer | Notes |
|---|---|---|
| 2026-09-15 | WASL AI Marketplace maintainers | Initial catalog entry created at 🔵 Research status as part of WASL AI Marketplace v1.2. No security or compliance review has been performed yet. |
