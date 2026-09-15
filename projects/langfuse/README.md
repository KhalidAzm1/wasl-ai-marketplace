# Langfuse

> See what every AI agent actually did, before trusting it.

| Field | Value |
|---|---|
| **Category** | Developers / Data & Analytics |
| **Status** | 🔵 Research |
| **Security Classification** | 🟡 Medium Risk *(pending formal Security Review — see note below)* |
| **Official Repository** | https://github.com/langfuse/langfuse |
| **License** | MIT for the open-source core; select advanced features (e.g. certain enterprise SSO/RBAC capabilities) require a separate commercial Enterprise Edition license for self-hosted use — verify current terms on the upstream repository before any deployment decision. |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | Developers, AI/Platform team, Security Reviewers |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Evaluation Notice

**We are currently evaluating Langfuse as a possible platform for WASL.** Nothing described on this page is deployed, approved, or connected to WASL production data. All integrations and use cases below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

## Business Problem

Once any WASL Agent moves beyond a Research write-up into an actual build, there is currently no shared way to see what it did, what it cost, or whether its outputs were any good — each team would have to build this themselves.

## What It Does

Langfuse is an open-source LLM engineering platform: it traces every step of an agent run (prompts, tool calls, retries, final output), supports manual and automated evaluation of output quality, tracks token cost and latency per agent/user, and provides a prompt-versioning/playground workflow. It integrates via SDKs, OpenTelemetry, or direct API and is provider-agnostic.

## Why WASL Might Use It

If evaluation succeeds, Langfuse could become the shared observability layer across every WASL Agent that reaches a real build — giving Security and Compliance reviewers concrete evidence of what an agent actually does (not just what its README proposes) before any Approved/Production decision, and giving engineering a single place to debug and improve agent behavior.

## Example WASL Use Cases

The following are **potential use cases under consideration**, not already-built functionality:

- Trace a single agent run end-to-end (prompt, tool calls, output)
- Track per-agent LLM cost and latency over time
- Flag and review low-quality or unsafe agent outputs
- Compare prompt/version changes before rolling them out

## Technical Architecture

Self-hostable web application (Docker/Docker Compose or Kubernetes) with a Postgres-backed store, an ingestion API that receives traces from instrumented applications (via SDK or OpenTelemetry), and a web UI for browsing traces, evals, and cost dashboards. Would sit alongside — not replace — the n8n/Azure OpenAI agent pipeline, receiving trace data from it.

## Deployment Options

- **Deployment model:** self-hosted
- **Notes:** Self-hostable via Docker/Docker Compose or Kubernetes (Helm chart available). The open-source core (MIT-licensed) covers tracing, evals, prompt management, and datasets; some advanced features are gated behind a separate self-hosted Enterprise Edition commercial license — see license note below and verify current feature split before any deployment decision.

## Integration Options (Proposed)

- Azure OpenAI
- OpenTelemetry
- n8n (via webhook/SDK)
- Dify
- Flowise

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

Trace data would include prompts, tool-call arguments, and model outputs — which may contain the same sensitive data an agent itself processes. Only non-sensitive or explicitly approved data should flow through traces until a Security and Compliance review is complete.

## Security Considerations

Langfuse has not yet undergone a formal WASL Security Review. Open questions include: authentication/authorization model for internal users, encryption at rest for trace data (which can contain sensitive prompt/output content), and the exact feature boundary between the open-source core and the commercial Enterprise Edition. Provisional classification: Medium Risk, pending review.

## Compliance Considerations

Not yet reviewed by Compliance/Legal. Not assessed for SAMA relevance and must not be described as compliant with any regulatory framework until that review happens. Because traced data may include sensitive agent inputs/outputs, this needs the same data-handling scrutiny as the agents it would observe.

## Saudi Data Residency Considerations

Not yet verified. If self-hosted on Azure infrastructure within a Saudi Arabia region, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review.

## Proof of Concept Status

No POC has been conducted yet. This entry reflects Initial AI Review only.

## WASL Integrations

**None yet — evaluation stage only.** No Langfuse instance is currently connected to any WASL system or data source.

## How to Use

This project is not yet approved for employee use. It is being evaluated. Interested employees should use Request Access below to register interest and help prioritize the evaluation.

## How to Request Access

Use the [**Request Access to AI Tool**](../../.github/ISSUE_TEMPLATE/request-access.yml) issue form. Since this project is at Research status, requests will currently be logged as expressions of interest to help prioritize the evaluation, rather than resulting in immediate access.

## Documentation

- Upstream docs: see the [official repository](https://github.com/langfuse/langfuse) for setup and usage documentation.
- Internal WASL setup/admin guides: not yet created — will be added if/when this progresses to Pilot.

## Original GitHub Repository

**https://github.com/langfuse/langfuse** — all credit for this project belongs to its original authors and contributors. This page describes WASL's evaluation of the project; it is not WASL's own software.

## Internal WASL Notes

Added to the marketplace as part of the v1.2 platform expansion. Next step, if prioritized, is a scoped POC focused on one low-risk use case using non-sensitive or synthetic data, before considering any use case involving internal or sensitive data.

## Review History

| Date | Reviewer | Notes |
|---|---|---|
| 2026-09-15 | WASL AI Marketplace maintainers | Initial catalog entry created at 🔵 Research status as part of WASL AI Marketplace v1.2. No security or compliance review has been performed yet. |
