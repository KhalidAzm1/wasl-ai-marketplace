# WASL BD Intelligence Agent

> Type a company name, get a partnership-ready briefing.

| Field | Value |
|---|---|
| **Type** | Internal WASL Agent Concept (not a separate external project) |
| **Category** | Business Development / Partnerships / Data & Analytics |
| **Status** | 🔵 Research |
| **Security Classification** | 🟡 Medium Risk *(initial classification, pending formal Security Review)* |
| **Priority (initial assessment)** | High |
| **Recommended POC Order** | 10 of 10 (see [POC Roadmap](../../docs/governance.md)) |
| **Human Approval Required** | Yes |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | Business Development, Partnerships, Sales, Management |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Concept Notice

**This is a proposed internal WASL AI Agent concept — not a deployed product, not a separate external GitHub project, and not currently built.** It is being evaluated as one of ten department agent concepts added to the WASL AI Marketplace in v1.1. Nothing described on this page is deployed, approved, or connected to WASL production data. All capabilities, integrations, and workflows below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

This agent is envisioned as one instance of WASL's **shared internal agent platform** — built primarily with Replit (employee-facing UI), n8n (orchestration and integrations), Azure OpenAI (LLM reasoning), and Azure AI Search (approved internal knowledge / RAG) — rather than bespoke, one-off infrastructure. See [`/web/docs/architecture.md`](../../web/docs/architecture.md) for the full shared-platform design.

## Business Problem

Business Development and Partnerships teams spend significant manual time researching companies and preparing for partnership meetings, with no shared AI-assisted research tooling.

## What It Does

A proposed AI agent that, given a company name, researches its products and market position from approved public/business sources, scores potential partnership fit with WASL, drafts meeting-prep questions, and suggests next actions — with any outbound communication or CRM action requiring human review before it is sent or committed.

## Why WASL Is Evaluating It

If evaluation succeeds, this could speed up BD research and meeting prep significantly, while keeping outreach, follow-ups, and partnership decisions under human control.

## Main Capabilities (Proposed)

- Company research
- Market intelligence
- Lead enrichment
- Opportunity scoring
- Partnership fit analysis
- Meeting briefing
- Contact research
- Follow-up drafting
- Next action recommendations
- CRM task creation

## Example Use Cases (Proposed, Not Deployed)

- Employee enters a company name and receives a company overview, market position, and partnership fit analysis
- Generate meeting-prep questions ahead of a partner meeting
- Draft a follow-up message after a BD meeting for human review before sending

## Example Workflow

Employee enters company: "Tabby" -> Agent returns: Company overview, Products, Market position, Potential WASL opportunity, Partnership fit, Meeting questions, Suggested next actions — for a human BD team member to act on.

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

- **Replit (employee UI):** UI for entering a company name and viewing the generated research briefing and suggested actions.
- **n8n (orchestration/integrations):** Orchestrates research retrieval, creates CRM tasks, and routes drafted follow-ups for human approval before sending.
- **Azure OpenAI (LLM reasoning):** Synthesizes company research into an overview, opportunity score, and partnership fit analysis.
- **Azure AI Search (RAG/knowledge):** Optional: retrieval over WASL's own past partnership notes/CRM history for continuity across meetings.

## Integration Options (Proposed)

- Azure OpenAI
- approved public/business sources
- CRM (proposed)

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

This agent should only use approved public/business information sources. No confidential partner data or internal deal terms should be processed until Security and Compliance review is complete.

## Security Considerations

This agent has not yet undergone a formal WASL Security Review. Provisional classification only, pending review.

## Compliance Considerations

Not yet reviewed by Compliance/Legal. This concept has not been assessed for SAMA relevance and must not be described as compliant with any regulatory framework, approved, or production-ready until that review happens.

## Saudi Data Residency Considerations

Not yet verified. If built on Azure infrastructure within a Saudi Arabia region with in-region Azure OpenAI and Azure AI Search deployments, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review.

## Human Approval Requirements

**Yes — human approval is required** before any irreversible action, external communication, financial transaction, or write to a system of record. This agent only proposes; a human confirms.

## Target Users / Departments

Business Development, Partnerships, Sales, Management

## Proof of Concept Status

No POC has been conducted yet. This entry reflects an initial concept write-up only.

## POC Recommendation

This agent is ranked **#10 of 10** in the marketplace maintainers' recommended internal-agent build order (see the POC Roadmap in [`/docs/governance.md`](../../docs/governance.md) and on the marketplace homepage). This is an initial recommendation only, pending PMO/leadership sign-off — not a committed schedule.

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
