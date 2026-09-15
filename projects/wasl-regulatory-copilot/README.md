# WASL Regulatory Copilot

> Compare a requirement against approved regulatory knowledge and surface the gaps.

| Field | Value |
|---|---|
| **Type** | Internal WASL Agent Concept (not a separate external project) |
| **Category** | Compliance & Legal / Knowledge & RAG |
| **Status** | 🔵 Research |
| **Security Classification** | 🔴 High Risk *(initial classification, pending formal Security Review)* |
| **Priority (initial assessment)** | Very High |
| **Recommended POC Order** | 2 of 10 (see [POC Roadmap](../../docs/governance.md)) |
| **Human Approval Required** | Yes |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | Compliance, Legal, Product, Risk |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Concept Notice

**This is a proposed internal WASL AI Agent concept — not a deployed product, not a separate external GitHub project, and not currently built.** It is being evaluated as one of ten department agent concepts added to the WASL AI Marketplace in v1.1. Nothing described on this page is deployed, approved, or connected to WASL production data. All capabilities, integrations, and workflows below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

This agent is envisioned as one instance of WASL's **shared internal agent platform** — built primarily with Replit (employee-facing UI), n8n (orchestration and integrations), Azure OpenAI (LLM reasoning), and Azure AI Search (approved internal knowledge / RAG) — rather than bespoke, one-off infrastructure. See [`/web/docs/architecture.md`](../../web/docs/architecture.md) for the full shared-platform design.

## Business Problem

Product, Compliance, and Legal teams manually check every new requirement, feature, or process against regulatory and policy documentation — a slow, expertise-bottlenecked process with no shared tooling to triage what needs deeper human review.

## What It Does

A proposed AI copilot that retrieves approved regulatory knowledge relevant to a submitted requirement or user story, compares the two, identifies potential gaps or missing controls, suggests a risk classification, and provides citations back to the source documents — always routing to a human Compliance/Legal reviewer for the actual decision.

## Why WASL Is Evaluating It

If evaluation succeeds, this could help Product and Compliance teams catch regulatory gaps earlier and faster, while keeping every compliance or legal determination firmly a human decision.

## Main Capabilities (Proposed)

- Policy comparison
- Requirement gap detection
- Regulatory checklist generation
- Product compliance review
- User story compliance review
- Evidence and citation retrieval
- Risk classification suggestions
- Missing control identification
- Regulatory document Q&A

## Example Use Cases (Proposed, Not Deployed)

- Compare a new product requirement against approved regulatory documentation
- Generate a regulatory checklist for a proposed feature
- Flag a user story that may be missing a required control
- Answer a question about an approved regulatory document with citations

## Example Workflow

Requirement / User Story -> Retrieve approved regulatory knowledge -> Compare -> Identify gaps -> Highlight risks -> Provide evidence / citation -> Escalate to Compliance / Legal reviewer for the final decision.

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

- **Replit (employee UI):** UI for submitting a requirement/user story for review and viewing the gap analysis with citations.
- **n8n (orchestration/integrations):** Routes flagged items to a human Compliance/Legal reviewer and tracks review status.
- **Azure OpenAI (LLM reasoning):** Compares requirements against retrieved regulatory content and drafts gap/risk summaries.
- **Azure AI Search (RAG/knowledge):** Core to this agent: retrieval over WASL's approved regulatory and policy knowledge base to ground every comparison in real, citable source documents.

## Integration Options (Proposed)

- Azure OpenAI
- Azure AI Search
- Jira
- Azure DevOps

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

This agent should only be grounded in approved, published regulatory and internal policy documents during Research/POC — not confidential legal advice, unpublished determinations, or customer/banking data.

## Security Considerations

This agent has not yet undergone a formal WASL Security Review. Provisional classification only, pending review. Given the regulatory sensitivity of its outputs, this agent is provisionally classified High Risk.

## Compliance Considerations

Not yet reviewed by Compliance/Legal. This concept has not been assessed for SAMA relevance and must not be described as compliant with any regulatory framework, approved, or production-ready until that review happens. This agent must NOT make the final legal or compliance decision under any circumstance — human reviewer approval is mandatory for every regulated or sensitive determination. This entry does not claim SAMA compliance.

## Saudi Data Residency Considerations

Not yet verified. If built on Azure infrastructure within a Saudi Arabia region with in-region Azure OpenAI and Azure AI Search deployments, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review.

## Human Approval Requirements

**Yes — human approval is required** before any irreversible action, external communication, financial transaction, or write to a system of record. This agent only proposes; a human confirms.

## Target Users / Departments

Compliance & Legal, Product & Business, Risk, Legal

## Proof of Concept Status

No POC has been conducted yet. This entry reflects an initial concept write-up only.

## POC Recommendation

This agent is ranked **#2 of 10** in the marketplace maintainers' recommended internal-agent build order (see the POC Roadmap in [`/docs/governance.md`](../../docs/governance.md) and on the marketplace homepage). This is an initial recommendation only, pending PMO/leadership sign-off — not a committed schedule.

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
