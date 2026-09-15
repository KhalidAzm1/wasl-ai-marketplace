# WASL HR Copilot

> Answer HR questions and support onboarding, without waiting on a human reply.

| Field | Value |
|---|---|
| **Type** | Internal WASL Agent Concept (not a separate external project) |
| **Category** | HR / AI Assistants |
| **Status** | 🔵 Research |
| **Security Classification** | 🔴 High Risk *(initial classification, pending formal Security Review)* |
| **Priority (initial assessment)** | High |
| **Recommended POC Order** | 7 of 10 (see [POC Roadmap](../../docs/governance.md)) |
| **Human Approval Required** | Yes |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | HR, Employees, Managers |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Concept Notice

**This is a proposed internal WASL AI Agent concept — not a deployed product, not a separate external GitHub project, and not currently built.** It is being evaluated as one of ten department agent concepts added to the WASL AI Marketplace in v1.1. Nothing described on this page is deployed, approved, or connected to WASL production data. All capabilities, integrations, and workflows below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

This agent is envisioned as one instance of WASL's **shared internal agent platform** — built primarily with Replit (employee-facing UI), n8n (orchestration and integrations), Azure OpenAI (LLM reasoning), and Azure AI Search (approved internal knowledge / RAG) — rather than bespoke, one-off infrastructure. See [`/web/docs/architecture.md`](../../web/docs/architecture.md) for the full shared-platform design.

## Business Problem

Employees and managers frequently have routine HR questions (leave policy, benefits, onboarding steps) that currently require waiting on a human HR response, and HR staff spend time on repetitive questions and manual onboarding tracking.

## What It Does

A proposed AI copilot that answers HR policy questions from approved internal documentation, supports employee onboarding with checklists and reminders, helps draft HR-related emails and documents, and routes more complex employee requests to the right HR team member.

## Why WASL Is Evaluating It

If evaluation succeeds, this could reduce routine HR question volume, speed up onboarding, and give employees instant, policy-grounded answers, while keeping personal HR actions and sensitive employee data decisions with human HR staff.

## Main Capabilities (Proposed)

- HR policy Q&A
- Employee onboarding support
- Leave process guidance
- Benefits information
- HR forms
- HR email / document drafting
- Training reminders
- Onboarding task tracking
- Employee request routing
- HR workflow automation

## Example Use Cases (Proposed, Not Deployed)

- "What is the leave policy?"
- "Create an onboarding checklist for a new employee."
- "Who has not completed mandatory training?"
- Draft a benefits summary email for a new hire
- Route an employee HR request to the right HR team member

## Example Workflow

Employee asks a question or submits a request -> Agent answers from approved HR knowledge or drafts the relevant document/routing -> requests that touch personal employee data or HR actions are routed to an HR team member for approval before anything is finalized.

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

- **Replit (employee UI):** Employee-facing chat UI for HR Q&A, onboarding checklists, and request submission.
- **n8n (orchestration/integrations):** Routes requests to HR staff, tracks onboarding tasks, sends reminders, and automates routine HR workflow steps.
- **Azure OpenAI (LLM reasoning):** Answers questions, drafts documents/emails, and generates onboarding checklists.
- **Azure AI Search (RAG/knowledge):** Retrieval over approved HR policy documents so answers are grounded in WASL's actual policies rather than generic knowledge.

## Integration Options (Proposed)

- Azure OpenAI
- Azure AI Search
- HR systems (proposed)
- email
- Microsoft Teams

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

HR data includes sensitive employee personal information. This agent must only be grounded in approved, non-personal HR policy documentation during Research/POC stages — no individual employee records should be connected until Security and Compliance review is complete.

## Security Considerations

This agent has not yet undergone a formal WASL Security Review. Provisional classification only, pending review. Given the sensitivity of employee personal data, this agent is provisionally classified High Risk.

## Compliance Considerations

Not yet reviewed by Compliance/Legal. This concept has not been assessed for SAMA relevance and must not be described as compliant with any regulatory framework, approved, or production-ready until that review happens.

## Saudi Data Residency Considerations

Not yet verified. If built on Azure infrastructure within a Saudi Arabia region with in-region Azure OpenAI and Azure AI Search deployments, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review.

## Human Approval Requirements

**Yes — human approval is required** before any irreversible action, external communication, financial transaction, or write to a system of record. This agent only proposes; a human confirms.

## Target Users / Departments

HR, All Employees, Management

## Proof of Concept Status

No POC has been conducted yet. This entry reflects an initial concept write-up only.

## POC Recommendation

This agent is ranked **#7 of 10** in the marketplace maintainers' recommended internal-agent build order (see the POC Roadmap in [`/docs/governance.md`](../../docs/governance.md) and on the marketplace homepage). This is an initial recommendation only, pending PMO/leadership sign-off — not a committed schedule.

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
