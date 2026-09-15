# WASL Cybersecurity Copilot

> A first-pass security analyst, never an autonomous responder.

| Field | Value |
|---|---|
| **Type** | Internal WASL Agent Concept (not a separate external project) |
| **Category** | Cybersecurity / Compliance & Legal |
| **Status** | 🔵 Research |
| **Security Classification** | 🔴 High Risk *(initial classification, pending formal Security Review)* |
| **Priority (initial assessment)** | Medium |
| **Recommended POC Order** | 12 of 14 (see [POC Roadmap](../../docs/governance.md)) |
| **Human Approval Required** | Yes |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | Security team, IT, Risk |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Concept Notice

**This is a proposed internal WASL AI Agent concept — not a deployed product, not a separate external GitHub project, and not currently built.** It is being evaluated as one of the internal agent concepts added to the WASL AI Marketplace in v1.2. Nothing described on this page is deployed, approved, or connected to WASL production data. All capabilities, integrations, and workflows below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

This agent is envisioned as one instance of WASL's **shared internal agent platform** — built primarily with Replit (employee-facing UI), n8n (orchestration and integrations), Azure OpenAI (LLM reasoning), and Azure AI Search (approved internal knowledge / RAG) — rather than bespoke, one-off infrastructure. See [`/web/docs/architecture.md`](../../web/docs/architecture.md) for the full shared-platform design.

## Business Problem

Security analysts spend significant time on manual first-pass triage and incident-summary writing, which slows down response to genuinely urgent issues and creates inconsistent documentation.

## What It Does

A proposed AI agent that drafts plain-language summaries and severity assessments of incoming security alerts, flags potential policy violations against WASL's own documented policies, answers employee questions about security policy, and suggests — but never executes — remediation steps. All triage output and suggested actions require human security-team confirmation.

## Why WASL Is Evaluating It

If evaluation succeeds, this could speed up incident response time and produce more consistent incident documentation, while keeping every actual security decision and remediation action in human hands — this agent proposes, a security analyst decides.

## Main Capabilities (Proposed)

- Summarize and triage incoming security alerts by severity
- Draft an incident summary from raw log/alert data for a human analyst to review
- Flag potential policy violations against WASL's documented security policies
- Answer security-policy questions grounded in approved internal documentation
- Suggest — never execute — remediation steps for a human to approve

## Example Use Cases (Proposed, Not Deployed)

- A security alert fires; the agent drafts a plain-language summary and severity assessment for the on-call analyst
- An employee asks whether a specific action is allowed under WASL's security policy and gets a grounded answer
- Multiple related alerts are clustered into a single draft incident report for human review

## Example Workflow

Security alert (SIEM/monitoring tool) -> n8n Trigger -> Cybersecurity Copilot -> Azure AI Search (security policies/playbooks) -> Draft severity + summary + suggested next step -> Human security analyst reviews and acts -> Incident record updated.

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

- **Replit (employee UI):** Security-team dashboard showing triaged alerts, draft incident summaries, and pending human-review items.
- **n8n (orchestration/integrations):** Receives alerts from monitoring tooling, orchestrates triage and drafting, and routes confirmed incidents to the security queue.
- **Azure OpenAI (LLM reasoning):** Drafts incident summaries, assesses severity, and flags potential policy violations.
- **Azure AI Search (RAG/knowledge):** Retrieval over approved WASL security policies, playbooks, and past incident write-ups.

## Integration Options (Proposed)

- SIEM/monitoring tooling (proposed)
- Microsoft Teams
- Azure OpenAI
- Azure AI Search

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

This agent would process security alert and log data, which is inherently sensitive (may reveal system vulnerabilities or attack patterns). This is one of the highest-sensitivity data categories in this catalog — no real alert/log data should be connected before a completed Security Review, and synthetic/redacted data should be used for any early evaluation.

## Security Considerations

This agent has not yet undergone a formal WASL Security Review — and given the nature of security data involved, this review should happen before any meaningful evaluation with real data, not deferred to a later stage. Provisional classification: High Risk.

## Compliance Considerations

Not yet reviewed by Compliance/Legal. Not assessed for SAMA relevance and must not be described as compliant with any regulatory framework, approved, or production-ready until that review happens.

## Saudi Data Residency Considerations

Not yet verified. If built on Azure infrastructure within a Saudi Arabia region with in-region Azure OpenAI and Azure AI Search deployments, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review.

## Human Approval Requirements

**Yes — human approval is required** before any irreversible action, external communication, financial transaction, or write to a system of record. This agent only proposes; a human confirms.

## Target Users / Departments

Cybersecurity, Risk, Engineering, Management

## Proof of Concept Status

No POC has been conducted yet. This entry reflects an initial concept write-up only.

## POC Recommendation

This agent is ranked **#12 of 14** in the marketplace maintainers' recommended internal-agent build order (see the POC Roadmap in [`/docs/governance.md`](../../docs/governance.md) and on the marketplace homepage). This is an initial recommendation only, pending PMO/leadership sign-off — not a committed schedule.

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
