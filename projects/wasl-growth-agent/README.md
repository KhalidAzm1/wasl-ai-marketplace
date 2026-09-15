# WASL Growth Agent

> Plan a campaign, generate the content calendar, and analyze what worked.

| Field | Value |
|---|---|
| **Type** | Internal WASL Agent Concept (not a separate external project) |
| **Category** | Marketing / Automation |
| **Status** | 🔵 Research |
| **Security Classification** | 🟡 Medium Risk *(initial classification, pending formal Security Review)* |
| **Priority (initial assessment)** | High |
| **Recommended POC Order** | 8 of 10 (see [POC Roadmap](../../docs/governance.md)) |
| **Human Approval Required** | Yes |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | Marketing, Growth, Content team |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Concept Notice

**This is a proposed internal WASL AI Agent concept — not a deployed product, not a separate external GitHub project, and not currently built.** It is being evaluated as one of ten department agent concepts added to the WASL AI Marketplace in v1.1. Nothing described on this page is deployed, approved, or connected to WASL production data. All capabilities, integrations, and workflows below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

This agent is envisioned as one instance of WASL's **shared internal agent platform** — built primarily with Replit (employee-facing UI), n8n (orchestration and integrations), Azure OpenAI (LLM reasoning), and Azure AI Search (approved internal knowledge / RAG) — rather than bespoke, one-off infrastructure. See [`/web/docs/architecture.md`](../../web/docs/architecture.md) for the full shared-platform design.

## Business Problem

Marketing and content teams spend significant time manually planning campaigns, drafting platform-specific content, and pulling together performance analysis across tools with no shared AI-assisted workflow.

## What It Does

A proposed AI agent that helps plan campaigns, generates content calendars and platform-specific post drafts (LinkedIn, X, TikTok concepts), analyzes competitors and audiences, and summarizes campaign performance with improvement recommendations — with all content requiring human approval before scheduling or publishing.

## Why WASL Is Evaluating It

If evaluation succeeds, this could speed up campaign planning and content production while keeping brand voice and final publishing decisions under human control.

## Main Capabilities (Proposed)

- Campaign ideation
- Content planning
- Content calendar
- LinkedIn content
- X / Twitter content
- TikTok concepts
- Campaign messaging
- Competitor analysis
- Audience analysis
- Performance analysis
- Content recommendations
- Design prompts
- Scheduled posting via n8n

## Example Use Cases (Proposed, Not Deployed)

- Generate a month's content calendar from a campaign brief
- Draft LinkedIn and X post copy for a product announcement
- Summarize competitor activity for a campaign planning session
- Analyze last month's campaign performance and recommend improvements

## Example Workflow

Campaign Idea -> Audience -> Competitor Analysis -> Campaign Concept -> Content Calendar -> Generate Content -> human Approval -> Schedule -> Collect Metrics -> Analyze Performance -> Recommend Improvements.

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

- **Replit (employee UI):** Marketing team UI for campaign planning, content review/approval, and performance dashboards.
- **n8n (orchestration/integrations):** Scheduled posting, metric collection from social platforms, and approval routing before anything is published.
- **Azure OpenAI (LLM reasoning):** Generates campaign concepts, content calendars, post copy, and performance analysis/recommendations.
- **Azure AI Search (RAG/knowledge):** Optional: retrieval over past campaign performance data and brand guidelines for consistency.

## Integration Options (Proposed)

- Azure OpenAI
- social platform APIs (proposed)
- n8n scheduled posting

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

Inputs are campaign briefs, public competitor information, and (once connected) WASL's own social/marketing performance data. No customer or employee personal data should be used.

## Security Considerations

This agent has not yet undergone a formal WASL Security Review. Provisional classification only, pending review.

## Compliance Considerations

Not yet reviewed by Compliance/Legal. This concept has not been assessed for SAMA relevance and must not be described as compliant with any regulatory framework, approved, or production-ready until that review happens.

## Saudi Data Residency Considerations

Not yet verified. If built on Azure infrastructure within a Saudi Arabia region with in-region Azure OpenAI and Azure AI Search deployments, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review.

## Human Approval Requirements

**Yes — human approval is required** before any irreversible action, external communication, financial transaction, or write to a system of record. This agent only proposes; a human confirms.

## Target Users / Departments

Marketing, Content Team, Growth

## Proof of Concept Status

No POC has been conducted yet. This entry reflects an initial concept write-up only.

## POC Recommendation

This agent is ranked **#8 of 10** in the marketplace maintainers' recommended internal-agent build order (see the POC Roadmap in [`/docs/governance.md`](../../docs/governance.md) and on the marketplace homepage). This is an initial recommendation only, pending PMO/leadership sign-off — not a committed schedule.

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
