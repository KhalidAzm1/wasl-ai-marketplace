# WASL Product & BA Copilot

> Turn a business idea into structured requirements, user stories, and acceptance criteria.

| Field | Value |
|---|---|
| **Type** | Internal WASL Agent Concept (not a separate external project) |
| **Category** | Product & Business / AI Assistants |
| **Status** | 🔵 Research |
| **Security Classification** | 🟡 Medium Risk *(initial classification, pending formal Security Review)* |
| **Priority (initial assessment)** | Very High |
| **Recommended POC Order** | 1 of 10 (see [POC Roadmap](../../docs/governance.md)) |
| **Human Approval Required** | Yes |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | Product Managers, Business Analysts, Product Owners, Project Managers |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Concept Notice

**This is a proposed internal WASL AI Agent concept — not a deployed product, not a separate external GitHub project, and not currently built.** It is being evaluated as one of ten department agent concepts added to the WASL AI Marketplace in v1.1. Nothing described on this page is deployed, approved, or connected to WASL production data. All capabilities, integrations, and workflows below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

This agent is envisioned as one instance of WASL's **shared internal agent platform** — built primarily with Replit (employee-facing UI), n8n (orchestration and integrations), Azure OpenAI (LLM reasoning), and Azure AI Search (approved internal knowledge / RAG) — rather than bespoke, one-off infrastructure. See [`/web/docs/architecture.md`](../../web/docs/architecture.md) for the full shared-platform design.

## Business Problem

Product Managers and Business Analysts spend significant time manually converting rough business ideas into structured requirements, user stories, and acceptance criteria, then re-keying them into Jira — a repetitive, error-prone process with no shared tooling.

## What It Does

A proposed AI copilot that takes a business idea or requirement in plain language and walks it through a structured pipeline: business analysis, gap analysis, business rule extraction, use case generation, user story generation, acceptance criteria, dependency and risk identification, test scenario suggestions, and an AI quality review — before optionally sending the result to Jira or Azure DevOps as a draft.

## Why WASL Is Evaluating It

If evaluation succeeds, this could become the standard first step for turning any WASL business idea into engineering-ready requirements, improving consistency and cutting the manual analysis workload for PMs and BAs across every product team.

## Main Capabilities (Proposed)

- Business requirements analysis
- Business gap analysis
- Requirement clarification
- Use case generation
- User story generation
- Acceptance criteria generation
- Business rules extraction
- Dependency identification
- Risk identification
- Test scenario suggestions
- User story review
- Requirement quality review
- Jira integration

## Example Use Cases (Proposed, Not Deployed)

- Draft user stories and acceptance criteria from a one-paragraph business idea
- Run a business gap analysis before a requirement goes to engineering
- Review an existing user story for quality and completeness
- Generate test scenarios directly from acceptance criteria
- Send finished stories to Jira as draft tickets for a PM to confirm

## Example Workflow

Idea -> Business Analysis -> Business Gap -> Business Rules -> Use Cases -> User Stories -> Acceptance Criteria -> Dependencies -> Risks -> Test Scenarios -> AI Review -> Send to Jira (as a draft, pending human confirmation).

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

- **Replit (employee UI):** Employee-facing chat/form UI for entering a business idea, reviewing generated stories, and approving what gets sent to Jira.
- **n8n (orchestration/integrations):** Orchestrates the multi-step analysis pipeline and handles the Jira/Azure DevOps write-back after human approval.
- **Azure OpenAI (LLM reasoning):** Generates the business analysis, gap analysis, use cases, user stories, acceptance criteria, and reviews.
- **Azure AI Search (RAG/knowledge):** Optional: retrieval over past approved requirements/templates to keep output consistent with WASL's existing documentation style.

## Integration Options (Proposed)

- Jira
- Azure DevOps
- Azure OpenAI
- Azure AI Search

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

Inputs are business ideas and requirements typed by employees. No customer, banking, or employee personal data should be entered until Security and Compliance review confirms what data classes are permitted.

## Security Considerations

This agent has not yet undergone a formal WASL Security Review. Provisional classification only, pending review.

## Compliance Considerations

Not yet reviewed by Compliance/Legal. This concept has not been assessed for SAMA relevance and must not be described as compliant with any regulatory framework, approved, or production-ready until that review happens.

## Saudi Data Residency Considerations

Not yet verified. If built on Azure infrastructure within a Saudi Arabia region with in-region Azure OpenAI and Azure AI Search deployments, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review.

## Human Approval Requirements

**Yes — human approval is required** before any irreversible action, external communication, financial transaction, or write to a system of record. This agent only proposes; a human confirms.

## Target Users / Departments

Product & Business, Developers, Project Managers, PMO

## Proof of Concept Status

No POC has been conducted yet. This entry reflects an initial concept write-up only.

## POC Recommendation

This agent is ranked **#1 of 10** in the marketplace maintainers' recommended internal-agent build order (see the POC Roadmap in [`/docs/governance.md`](../../docs/governance.md) and on the marketplace homepage). This is an initial recommendation only, pending PMO/leadership sign-off — not a committed schedule.

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
