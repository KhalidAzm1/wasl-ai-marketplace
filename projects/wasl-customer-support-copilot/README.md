# WASL Customer Support Copilot

> A drafting assistant for support, not an autonomous responder.

| Field | Value |
|---|---|
| **Type** | Internal WASL Agent Concept (not a separate external project) |
| **Category** | Automation / Knowledge & RAG |
| **Status** | 🔵 Research |
| **Security Classification** | 🔴 High Risk *(initial classification, pending formal Security Review)* |
| **Priority (initial assessment)** | Medium |
| **Recommended POC Order** | 13 of 14 (see [POC Roadmap](../../docs/governance.md)) |
| **Human Approval Required** | Yes |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | Customer Support team, Operations |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Concept Notice

**This is a proposed internal WASL AI Agent concept — not a deployed product, not a separate external GitHub project, and not currently built.** It is being evaluated as one of the internal agent concepts added to the WASL AI Marketplace in v1.2. Nothing described on this page is deployed, approved, or connected to WASL production data. All capabilities, integrations, and workflows below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

This agent is envisioned as one instance of WASL's **shared internal agent platform** — built primarily with Replit (employee-facing UI), n8n (orchestration and integrations), Azure OpenAI (LLM reasoning), and Azure AI Search (approved internal knowledge / RAG) — rather than bespoke, one-off infrastructure. See [`/web/docs/architecture.md`](../../web/docs/architecture.md) for the full shared-platform design.

## Business Problem

Support agents spend significant time looking up the correct policy or product detail for each query and drafting responses from scratch, slowing down response time and risking inconsistent answers.

## What It Does

A proposed AI agent that drafts a suggested customer-support response grounded in WASL's approved policy and product documentation (with citations), classifies and prioritizes incoming queries, flags anything that should be escalated to a specialist, and summarizes long threads for handoffs — always as a draft for a human support agent to review, edit, and send.

## Why WASL Is Evaluating It

If evaluation succeeds, this could reduce response time and improve consistency of customer-facing answers, while every actual customer-facing message still requires human review and sign-off before sending.

## Main Capabilities (Proposed)

- Draft a suggested response to an incoming customer query, grounded in approved policy documentation
- Classify and prioritize incoming support requests
- Surface the relevant policy/product documentation for a given query
- Detect and flag queries that need escalation to a specialist or manager
- Summarize a long customer conversation thread for a handoff

## Example Use Cases (Proposed, Not Deployed)

- A customer query comes in; the agent drafts a grounded response citing the relevant policy for a support agent to review and send
- A complex or sensitive query is detected and flagged for escalation rather than an AI-drafted response
- A support agent picks up a handed-off conversation and reads an AI-generated summary instead of the full thread

## Example Workflow

Customer query (support channel) -> n8n Trigger -> Customer Support Copilot -> Azure AI Search (policy/product docs) -> Draft response + citations -> Human support agent reviews, edits, and sends -> Conversation logged.

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

- **Replit (employee UI):** Support-agent dashboard showing incoming queries with AI-drafted response suggestions alongside the original message.
- **n8n (orchestration/integrations):** Receives incoming customer queries, orchestrates drafting, and routes escalations to the right queue.
- **Azure OpenAI (LLM reasoning):** Drafts the suggested response and classifies/prioritizes the query.
- **Azure AI Search (RAG/knowledge):** Retrieval over approved policy and product documentation to ground every drafted response with citations.

## Integration Options (Proposed)

- Customer support platform (proposed)
- Email
- Azure OpenAI
- Azure AI Search

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

This agent would process customer queries, which may include personal or account-related data — a regulated data category. No real customer data should be connected before a completed Security and Compliance/Legal review; synthetic or clearly non-sensitive data should be used for any early evaluation.

## Security Considerations

This agent has not yet undergone a formal WASL Security Review. Given the customer-data exposure, this should happen before any meaningful evaluation with real data. Provisional classification: High Risk.

## Compliance Considerations

Not yet reviewed by Compliance/Legal. Because this would touch customer data, a Compliance/Legal review is required (per WASL's governance pipeline) before any real customer data is used, not optional. Not assessed for SAMA relevance and must not be described as compliant with any regulatory framework, approved, or production-ready until that review happens.

## Saudi Data Residency Considerations

Not yet verified. If built on Azure infrastructure within a Saudi Arabia region with in-region Azure OpenAI and Azure AI Search deployments, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review.

## Human Approval Requirements

**Yes — human approval is required** before any irreversible action, external communication, financial transaction, or write to a system of record. This agent only proposes; a human confirms.

## Target Users / Departments

Operations, Management, Banking Operations

## Proof of Concept Status

No POC has been conducted yet. This entry reflects an initial concept write-up only.

## POC Recommendation

This agent is ranked **#13 of 14** in the marketplace maintainers' recommended internal-agent build order (see the POC Roadmap in [`/docs/governance.md`](../../docs/governance.md) and on the marketplace homepage). This is an initial recommendation only, pending PMO/leadership sign-off — not a committed schedule.

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
