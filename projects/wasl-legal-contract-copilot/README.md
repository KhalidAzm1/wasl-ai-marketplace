# WASL Legal Contract Copilot

> A first read of a contract, before a lawyer's read.

| Field | Value |
|---|---|
| **Type** | Internal WASL Agent Concept (not a separate external project) |
| **Category** | Compliance & Legal |
| **Status** | 🔵 Research |
| **Security Classification** | 🔴 High Risk *(initial classification, pending formal Security Review)* |
| **Priority (initial assessment)** | Medium |
| **Recommended POC Order** | 14 of 14 (see [POC Roadmap](../../docs/governance.md)) |
| **Human Approval Required** | Yes |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | Legal team, Contract Managers |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Concept Notice

**This is a proposed internal WASL AI Agent concept — not a deployed product, not a separate external GitHub project, and not currently built.** It is being evaluated as one of the internal agent concepts added to the WASL AI Marketplace in v1.2. Nothing described on this page is deployed, approved, or connected to WASL production data. All capabilities, integrations, and workflows below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

This agent is envisioned as one instance of WASL's **shared internal agent platform** — built primarily with Replit (employee-facing UI), n8n (orchestration and integrations), Azure OpenAI (LLM reasoning), and Azure AI Search (approved internal knowledge / RAG) — rather than bespoke, one-off infrastructure. See [`/web/docs/architecture.md`](../../web/docs/architecture.md) for the full shared-platform design.

## Business Problem

Legal reviews a high volume of contracts and redlines, and a large share of that time goes to a first-pass check against WASL's own standard terms and templates rather than genuinely novel legal judgment.

## What It Does

A proposed AI agent that reviews a contract against WASL's approved templates and playbooks, flags clauses that deviate from the standard, identifies missing standard terms, summarizes key terms in plain language, and compares redlined versions to show exactly what changed — always as input for a lawyer's own review, never as a substitute for legal judgment or sign-off.

## Why WASL Is Evaluating It

If evaluation succeeds, this could speed up first-pass contract review and reduce the chance of a non-standard clause slipping through unnoticed, while every actual legal decision, negotiation position, and contract sign-off remains entirely with WASL's lawyers.

## Main Capabilities (Proposed)

- Flag clauses that deviate from WASL's approved contract templates/playbooks
- Identify missing standard terms against a checklist
- Summarize a contract's key terms (parties, term length, obligations, termination) for quick review
- Compare a redline against the previous version and summarize what changed
- Answer questions about a specific contract's terms, grounded in the document itself

## Example Use Cases (Proposed, Not Deployed)

- A new vendor contract is uploaded; the agent flags clauses that don't match WASL's standard playbook for a lawyer to examine first
- A lawyer asks for a plain-language summary of a long contract's key terms before a meeting
- A redlined draft comes back from a counterparty; the agent summarizes exactly what changed since the last version

## Example Workflow

Contract document uploaded -> n8n Trigger -> Legal Contract Copilot -> Azure AI Search (approved templates/playbooks) -> Clause-by-clause flags + summary -> Human lawyer reviews and decides -> Review notes logged.

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

- **Replit (employee UI):** Legal-team dashboard for uploading a contract and viewing flagged clauses, missing terms, and the generated summary.
- **n8n (orchestration/integrations):** Orchestrates document intake, triggers the review pipeline, and routes flagged contracts to the right reviewer.
- **Azure OpenAI (LLM reasoning):** Performs clause-by-clause analysis, drafts summaries, and compares document versions.
- **Azure AI Search (RAG/knowledge):** Retrieval over WASL's approved contract templates, playbooks, and prior review precedent.

## Integration Options (Proposed)

- Document management system (proposed)
- Email
- Azure OpenAI
- Azure AI Search

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

This agent would process contract documents, which frequently contain commercially sensitive and confidential terms. Only non-sensitive or explicitly approved contracts should be used for evaluation until a Security and Compliance/Legal review is complete.

## Security Considerations

This agent has not yet undergone a formal WASL Security Review. Given the confidentiality of contract content, this should happen before any real contracts are processed. Provisional classification: High Risk.

## Compliance Considerations

Not yet reviewed by Compliance/Legal — which is particularly important here since Legal is this agent's own primary user. Not assessed for SAMA relevance and must not be described as compliant with any regulatory framework, approved, or production-ready until that review happens. This agent assists review; it does not provide legal advice and does not replace a lawyer's judgment.

## Saudi Data Residency Considerations

Not yet verified. If built on Azure infrastructure within a Saudi Arabia region with in-region Azure OpenAI and Azure AI Search deployments, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review.

## Human Approval Requirements

**Yes — human approval is required** before any irreversible action, external communication, financial transaction, or write to a system of record. This agent only proposes; a human confirms.

## Target Users / Departments

Legal, Compliance & Legal, Risk, Management

## Proof of Concept Status

No POC has been conducted yet. This entry reflects an initial concept write-up only.

## POC Recommendation

This agent is ranked **#14 of 14** in the marketplace maintainers' recommended internal-agent build order (see the POC Roadmap in [`/docs/governance.md`](../../docs/governance.md) and on the marketplace homepage). This is an initial recommendation only, pending PMO/leadership sign-off — not a committed schedule.

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
