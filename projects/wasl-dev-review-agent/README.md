# WASL Dev Review Agent

> An AI first pass on a pull request, before a human reviewer looks at it.

| Field | Value |
|---|---|
| **Type** | Internal WASL Agent Concept (not a separate external project) |
| **Category** | Developers / Automation |
| **Status** | 🔵 Research |
| **Security Classification** | 🟡 Medium Risk *(initial classification, pending formal Security Review)* |
| **Priority (initial assessment)** | High |
| **Recommended POC Order** | 9 of 10 (see [POC Roadmap](../../docs/governance.md)) |
| **Human Approval Required** | Yes |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | Developers, QA, Engineering leads |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Concept Notice

**This is a proposed internal WASL AI Agent concept — not a deployed product, not a separate external GitHub project, and not currently built.** It is being evaluated as one of ten department agent concepts added to the WASL AI Marketplace in v1.1. Nothing described on this page is deployed, approved, or connected to WASL production data. All capabilities, integrations, and workflows below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

This agent is envisioned as one instance of WASL's **shared internal agent platform** — built primarily with Replit (employee-facing UI), n8n (orchestration and integrations), Azure OpenAI (LLM reasoning), and Azure AI Search (approved internal knowledge / RAG) — rather than bespoke, one-off infrastructure. See [`/web/docs/architecture.md`](../../web/docs/architecture.md) for the full shared-platform design.

## Business Problem

Engineering teams spend significant reviewer time on routine first-pass code review and manually writing test cases from user stories, slowing down delivery.

## What It Does

A proposed AI agent that reviews pull requests for code quality, potential bugs, and API design issues, generates test cases from user stories, suggests release checklists, and posts its findings as PR comments — always as suggestions for a human reviewer, never as an automatic merge/approval.

## Why WASL Is Evaluating It

If evaluation succeeds, this could speed up the review cycle by giving human reviewers an AI first pass to work from, while final approval and merge decisions remain entirely human.

## Main Capabilities (Proposed)

- Pull request review
- Code review assistance
- Bug analysis
- API review
- Test case generation
- User story to test case conversion
- Release checklist generation
- Code quality recommendations
- Security review suggestions

## Example Use Cases (Proposed, Not Deployed)

- Get an AI first-pass review comment on a new pull request
- Generate test cases from a user story before development starts
- Generate a release checklist for an upcoming deployment

## Example Workflow

GitHub PR -> n8n Trigger -> Dev Review Agent -> Code Review -> Test Suggestions -> Risk / Security Suggestions -> Comment on PR for a human reviewer to confirm or dismiss.

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

- **Replit (employee UI):** Optional dashboard for reviewing agent-flagged PRs and test suggestions outside of GitHub itself.
- **n8n (orchestration/integrations):** Triggered by GitHub/Azure DevOps PR webhooks, orchestrates the review pipeline, and posts comments back to the PR.
- **Azure OpenAI (LLM reasoning):** Performs the code review analysis, generates test cases, and drafts release checklists.
- **Azure AI Search (RAG/knowledge):** Optional: retrieval over WASL coding standards/security guidelines to ground review comments.

## Integration Options (Proposed)

- GitHub
- Azure DevOps
- Azure OpenAI
- n8n webhook triggers

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

This agent would read source code and PR metadata. Only WASL-owned repositories with appropriate access controls should be connected; no external/public exposure of proprietary code.

## Security Considerations

This agent has not yet undergone a formal WASL Security Review. Provisional classification only, pending review.

## Compliance Considerations

Not yet reviewed by Compliance/Legal. This concept has not been assessed for SAMA relevance and must not be described as compliant with any regulatory framework, approved, or production-ready until that review happens.

## Saudi Data Residency Considerations

Not yet verified. If built on Azure infrastructure within a Saudi Arabia region with in-region Azure OpenAI and Azure AI Search deployments, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review.

## Human Approval Requirements

**Yes — human approval is required** before any irreversible action, external communication, financial transaction, or write to a system of record. This agent only proposes; a human confirms.

## Target Users / Departments

Developers, QA, Engineering

## Proof of Concept Status

No POC has been conducted yet. This entry reflects an initial concept write-up only.

## POC Recommendation

This agent is ranked **#9 of 10** in the marketplace maintainers' recommended internal-agent build order (see the POC Roadmap in [`/docs/governance.md`](../../docs/governance.md) and on the marketplace homepage). This is an initial recommendation only, pending PMO/leadership sign-off — not a committed schedule.

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
