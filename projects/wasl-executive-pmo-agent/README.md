# WASL Executive PMO Agent

> Ask for the status of all active projects and get an executive-ready summary.

| Field | Value |
|---|---|
| **Type** | Internal WASL Agent Concept (not a separate external project) |
| **Category** | PMO / Management / Data & Analytics |
| **Status** | 🔵 Research |
| **Security Classification** | 🟡 Medium Risk *(initial classification, pending formal Security Review)* |
| **Priority (initial assessment)** | Very High |
| **Recommended POC Order** | 4 of 10 (see [POC Roadmap](../../docs/governance.md)) |
| **Human Approval Required** | Yes |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | Management, PMO, Project Managers, Product leadership |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Concept Notice

**This is a proposed internal WASL AI Agent concept — not a deployed product, not a separate external GitHub project, and not currently built.** It is being evaluated as one of ten department agent concepts added to the WASL AI Marketplace in v1.1. Nothing described on this page is deployed, approved, or connected to WASL production data. All capabilities, integrations, and workflows below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

This agent is envisioned as one instance of WASL's **shared internal agent platform** — built primarily with Replit (employee-facing UI), n8n (orchestration and integrations), Azure OpenAI (LLM reasoning), and Azure AI Search (approved internal knowledge / RAG) — rather than bespoke, one-off infrastructure. See [`/web/docs/architecture.md`](../../web/docs/architecture.md) for the full shared-platform design.

## Business Problem

PMO and leadership currently assemble project portfolio status manually across Jira, Azure DevOps, and various trackers, which is time-consuming and makes it hard to get a fast, consistent view of portfolio health.

## What It Does

A proposed AI agent that pulls project data from Jira/Azure DevOps, analyzes sprint status, delays, risks, dependencies, bugs, and blockers, and produces weekly executive reports with recommended management actions.

## Why WASL Is Evaluating It

If evaluation succeeds, this could give PMO and leadership a faster, more consistent view of portfolio health without manually compiling status from multiple systems each week.

## Main Capabilities (Proposed)

- Project health analysis
- Sprint status
- Delays
- Risks
- Dependencies
- Bugs
- Blockers
- Delivery progress
- Weekly executive reports
- Project summaries
- Recommended management actions

## Example Use Cases (Proposed, Not Deployed)

- "Give me the status of all active projects this week."
- Generate a weekly executive report across the project portfolio
- Identify which projects are at risk of missing their delivery date

## Example Workflow

Example output: Overall Health: Yellow. Completed: 7. Delayed: 3. High Risks: 2. Blockers: 4. Recommended Actions: [human-reviewed list] — generated from Jira/Azure DevOps project data via n8n and Azure OpenAI.

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

- **Replit (employee UI):** Executive dashboard UI showing portfolio health, per-project summaries, and weekly report history.
- **n8n (orchestration/integrations):** Pulls project data from Jira/Azure DevOps on a schedule and assembles it for analysis.
- **Azure OpenAI (LLM reasoning):** Analyzes project data to produce health scoring, risk/blocker summaries, and recommended actions.
- **Azure AI Search (RAG/knowledge):** Not primary to this agent; may be added later for retrieval over past project retrospectives.

## Integration Options (Proposed)

- Jira
- Azure DevOps
- task/project systems
- Microsoft Teams

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

Inputs are project management metadata (tickets, status, sprints) rather than customer or financial data, but project data can still be sensitive (unreleased plans, performance-related risk flags) and should be scoped to approved projects only.

## Security Considerations

This agent has not yet undergone a formal WASL Security Review. Provisional classification only, pending review.

## Compliance Considerations

Not yet reviewed by Compliance/Legal. This concept has not been assessed for SAMA relevance and must not be described as compliant with any regulatory framework, approved, or production-ready until that review happens.

## Saudi Data Residency Considerations

Not yet verified. If built on Azure infrastructure within a Saudi Arabia region with in-region Azure OpenAI and Azure AI Search deployments, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review.

## Human Approval Requirements

**Yes — human approval is required** before any irreversible action, external communication, financial transaction, or write to a system of record. This agent only proposes; a human confirms.

## Target Users / Departments

Management, PMO, Project Managers, Product & Business

## Proof of Concept Status

No POC has been conducted yet. This entry reflects an initial concept write-up only.

## POC Recommendation

This agent is ranked **#4 of 10** in the marketplace maintainers' recommended internal-agent build order (see the POC Roadmap in [`/docs/governance.md`](../../docs/governance.md) and on the marketplace homepage). This is an initial recommendation only, pending PMO/leadership sign-off — not a committed schedule.

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
