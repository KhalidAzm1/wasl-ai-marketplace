# Open WebUI

> A private, self-hosted chat interface for WASL's own models.

| Field | Value |
|---|---|
| **Category** | AI Assistants |
| **Status** | 🔵 Research |
| **Security Classification** | 🟡 Medium Risk *(pending formal Security Review — see note below)* |
| **Official Repository** | https://github.com/open-webui/open-webui |
| **License** | Open WebUI License (a custom source-available license introduced in late 2025, replacing the project's earlier BSD-3-Clause license; includes a contributor license agreement and some usage/branding conditions) — this is not a standard permissive OSS license and must be reviewed against WASL's open-source usage policy before any deployment decision, not assumed equivalent to Apache/MIT/BSD terms. |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | All Employees |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Evaluation Notice

**We are currently evaluating Open WebUI as a possible platform for WASL.** Nothing described on this page is deployed, approved, or connected to WASL production data. All integrations and use cases below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

## Business Problem

Without a sanctioned internal AI chat tool, employees may be tempted to paste WASL data into public consumer AI chat products that offer no data-handling guarantees to WASL at all.

## What It Does

Open WebUI is a self-hosted, browser-based chat interface (similar in feel to consumer AI chat products) that connects to a configured LLM backend — proposed here as Azure OpenAI — and supports features like conversation history, document upload for RAG-style Q&A, and multi-user access once authentication is configured.

## Why WASL Might Use It

If evaluation succeeds, this could give every WASL employee a general-purpose, sanctioned AI chat option that keeps data inside WASL's own Azure boundary, reducing the temptation to use unapproved public AI tools for work tasks — complementing rather than replacing the department-specific Agents in this catalog.

## Example WASL Use Cases

The following are **potential use cases under consideration**, not already-built functionality:

- General-purpose AI chat for employees, backed by Azure OpenAI instead of a public consumer chatbot
- Upload a document and ask questions about it (RAG) within an approved, self-hosted boundary
- Give employees a sanctioned alternative to pasting WASL data into public AI chat tools

## Technical Architecture

Self-hostable web application (Docker/Docker Compose) with a backend that proxies chat requests to a configured LLM provider and a frontend chat UI. Optional RAG support would route document retrieval through Azure AI Search. No authentication layer is active today — see the marketplace's own architecture doc for the planned Microsoft Entra ID login flow this would eventually need to sit behind.

## Deployment Options

- **Deployment model:** self-hosted
- **Notes:** Self-hostable via Docker/Docker Compose. Cloud requirement: compute for hosting plus API access to a configured LLM provider (proposed: Azure OpenAI). No authentication is wired up yet — see security notes.

## Integration Options (Proposed)

- Azure OpenAI
- Azure AI Search (for document RAG)
- Microsoft Entra ID (planned, for login)

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

As a general-purpose chat tool, employees could paste any content into it — which means it needs the same 'no sensitive data until reviewed' guardrail as every other Research-stage entry here, likely enforced initially through usage guidance rather than technical controls.

## Security Considerations

Open WebUI has not yet undergone a formal WASL Security Review. Open questions include: the custom license's implications for a modified/rebranded internal deployment, authentication (currently none — see the marketplace's authentication-readiness plan), and how uploaded documents for RAG are stored. Provisional classification: Medium Risk, pending review.

## Compliance Considerations

Not yet reviewed by Compliance/Legal. Not assessed for SAMA relevance and must not be described as compliant with any regulatory framework until that review happens. The license terms specifically (custom, not a standard OSS license) should be checked against WASL's open-source usage policy before proceeding.

## Saudi Data Residency Considerations

Not yet verified. If self-hosted on Azure infrastructure within a Saudi Arabia region, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review.

## Proof of Concept Status

No POC has been conducted yet. This entry reflects Initial AI Review only.

## WASL Integrations

**None yet — evaluation stage only.** No Open WebUI instance is currently connected to any WASL system or data source.

## How to Use

This project is not yet approved for employee use. It is being evaluated. Interested employees should use Request Access below to register interest and help prioritize the evaluation.

## How to Request Access

Use the [**Request Access to AI Tool**](../../.github/ISSUE_TEMPLATE/request-access.yml) issue form. Since this project is at Research status, requests will currently be logged as expressions of interest to help prioritize the evaluation, rather than resulting in immediate access.

## Documentation

- Upstream docs: see the [official repository](https://github.com/open-webui/open-webui) for setup and usage documentation.
- Internal WASL setup/admin guides: not yet created — will be added if/when this progresses to Pilot.

## Original GitHub Repository

**https://github.com/open-webui/open-webui** — all credit for this project belongs to its original authors and contributors. This page describes WASL's evaluation of the project; it is not WASL's own software.

## Internal WASL Notes

Added to the marketplace as part of the v1.2 platform expansion. Next step, if prioritized, is a scoped POC focused on one low-risk use case using non-sensitive or synthetic data, before considering any use case involving internal or sensitive data.

## Review History

| Date | Reviewer | Notes |
|---|---|---|
| 2026-09-15 | WASL AI Marketplace maintainers | Initial catalog entry created at 🔵 Research status as part of WASL AI Marketplace v1.2. No security or compliance review has been performed yet. |
