# Flowise

> Drag-and-drop AI agent flows, LLM-native.

| Field | Value |
|---|---|
| **Category** | Automation / AI Assistants |
| **Status** | 🔵 Research |
| **Security Classification** | 🟡 Medium Risk *(pending formal Security Review — see note below)* |
| **Official Repository** | https://github.com/FlowiseAI/Flowise |
| **License** | Apache-2.0 (verify current terms on the upstream repository before any deployment decision) |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | Developers, Business Analysts, Product teams |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Evaluation Notice

**We are currently evaluating Flowise as a possible platform for WASL.** Nothing described on this page is deployed, approved, or connected to WASL production data. All integrations and use cases below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

## Business Problem

Building and iterating on an agent's conversational/reasoning flow currently requires either full custom code or hand-wiring it inside n8n's general-purpose (not LLM-native) node editor, which slows down prototyping for non-engineers.

## What It Does

Flowise is an open-source drag-and-drop builder purpose-built for LLM applications: chatflows, agent flows, and RAG pipelines assembled from pre-built nodes (LLM calls, retrievers, tools, memory, conditionals) without writing orchestration code by hand. It exposes built flows as an API endpoint that other systems (such as an n8n workflow or the Replit-based employee UI) can call.

## Why WASL Might Use It

If evaluation succeeds, Flowise could let Business Analysts and Product teams prototype an agent's core reasoning flow visually and hand off a working draft to engineering, rather than every flow being written by hand from scratch — while n8n would remain responsible for the surrounding integrations, scheduling, and approvals per the existing shared-platform split.

## Example WASL Use Cases

The following are **potential use cases under consideration**, not already-built functionality:

- Prototype an agent's conversational flow visually before committing to code
- Build a RAG chatbot flow over an approved internal document set
- Chain multiple LLM calls and tool calls into a single visual pipeline

## Technical Architecture

Self-hostable web application (Docker/Docker Compose is the common path) with a visual flow editor, a flow execution engine, and a REST API that exposes each built flow as a callable endpoint. Would sit inside the 'Agent Logic' layer of the existing shared-platform diagram, called by n8n rather than replacing it.

## Deployment Options

- **Deployment model:** self-hosted
- **Notes:** Self-hostable via Docker/Docker Compose or npm global install. Cloud requirement: compute for hosting plus API access to a configured LLM provider (proposed: Azure OpenAI).

## Integration Options (Proposed)

- Azure OpenAI
- Azure AI Search
- n8n (as a downstream/upstream step)
- WASL internal APIs

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

Data requirements depend entirely on which flow is being built. A RAG-style flow would need access to whatever document set it answers over — limited to non-sensitive or explicitly approved data until a Security and Compliance review is complete.

## Security Considerations

Flowise has not yet undergone a formal WASL Security Review. Open questions include: authentication/authorization for internal users, how flow credentials (API keys) are stored, and whether flow definitions or execution logs could leak sensitive prompt content. Provisional classification: Medium Risk, pending review.

## Compliance Considerations

Not yet reviewed by Compliance/Legal. Not assessed for SAMA relevance and must not be described as compliant with any regulatory framework until that review happens.

## Saudi Data Residency Considerations

Not yet verified. If self-hosted on Azure infrastructure within a Saudi Arabia region, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review.

## Proof of Concept Status

No POC has been conducted yet. This entry reflects Initial AI Review only.

## WASL Integrations

**None yet — evaluation stage only.** No Flowise instance is currently connected to any WASL system or data source.

## How to Use

This project is not yet approved for employee use. It is being evaluated. Interested employees should use Request Access below to register interest and help prioritize the evaluation.

## How to Request Access

Use the [**Request Access to AI Tool**](../../.github/ISSUE_TEMPLATE/request-access.yml) issue form. Since this project is at Research status, requests will currently be logged as expressions of interest to help prioritize the evaluation, rather than resulting in immediate access.

## Documentation

- Upstream docs: see the [official repository](https://github.com/FlowiseAI/Flowise) for setup and usage documentation.
- Internal WASL setup/admin guides: not yet created — will be added if/when this progresses to Pilot.

## Original GitHub Repository

**https://github.com/FlowiseAI/Flowise** — all credit for this project belongs to its original authors and contributors. This page describes WASL's evaluation of the project; it is not WASL's own software.

## Internal WASL Notes

Added to the marketplace as part of the v1.2 platform expansion. Next step, if prioritized, is a scoped POC focused on one low-risk use case using non-sensitive or synthetic data, before considering any use case involving internal or sensitive data.

## Review History

| Date | Reviewer | Notes |
|---|---|---|
| 2026-09-15 | WASL AI Marketplace maintainers | Initial catalog entry created at 🔵 Research status as part of WASL AI Marketplace v1.2. No security or compliance review has been performed yet. |
