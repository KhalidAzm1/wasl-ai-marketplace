# Dify

> Open-source platform for building AI agents, workflows, and RAG applications — being evaluated as a possible foundation for internal WASL AI agents.

| Field | Value |
|---|---|
| **Category** | AI Assistants / Automation |
| **Status** | 🔵 Research |
| **Security Classification** | 🟡 Medium Risk *(pending formal Security Review — see note below)* |
| **Official Repository** | https://github.com/langgenius/dify |
| **License** | Apache-2.0 (verify current license terms on the upstream repository before any deployment decision) |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | Developers, Business Analysts, Product Managers, teams wanting to build internal AI agents/workflows |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Evaluation Notice

**We are currently evaluating Dify as a possible platform for creating and managing internal WASL AI agents.** Nothing described on this page is deployed, approved, or connected to WASL production data. All integrations and use cases below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

## Business Problem

Teams across WASL (Product, Business Analysis, Support, Compliance, and others) repeatedly want to build AI-assisted workflows — summarizers, Q&A bots over internal knowledge, structured agents that call internal tools — but currently have no shared, supported platform to do this safely and consistently. Each team either builds one-off scripts or does nothing.

## What It Does

Dify is an open-source LLM application development platform. It provides a visual workflow builder for orchestrating AI agents and pipelines, a way to build Retrieval-Augmented Generation (RAG) applications over custom document sets, a plugin/tool-calling framework for connecting agents to external systems, and a hosted UI for prompt/workflow management, observability, and multi-user collaboration. It supports multiple LLM providers rather than locking users into one vendor.

## Why WASL Might Use It

If evaluation succeeds, Dify could become a shared, centrally supported platform for building internal AI agents and RAG applications, rather than every department building bespoke, unreviewed tooling. Centralizing on one reviewed platform would make it much easier to apply consistent security and compliance controls across all AI agent use cases at once.

## Example WASL Use Cases

The following are **potential use cases under consideration**, not already-built functionality:

- Business Analyst Agent — drafting and structuring analysis from raw inputs
- Product Manager Agent — assisting with roadmap and requirements documentation
- User Story Generator — turning requirements discussions into draft user stories
- User Story Reviewer — checking draft stories against a quality checklist
- Business Gap Analyzer — comparing current-state vs. desired-state process descriptions
- Compliance Knowledge Agent — answering questions against approved compliance documentation
- Banking Knowledge Agent — answering questions against approved banking/product documentation
- Marketing Agent — drafting and iterating on marketing content
- Internal Support Agent — first-line answers to common internal employee questions
- RAG Assistant — general-purpose Q&A over an approved internal knowledge base
- Workflow Agent — orchestrating multi-step internal processes

## Technical Architecture

Dify is a self-hostable web application (Docker Compose-based deployment is the common path) consisting of a backend API, a workflow/orchestration engine, a vector database integration layer for RAG, and a web front end for building and managing applications. It can call out to various LLM providers via configured API keys/endpoints, including Azure OpenAI.

## Deployment Options

- **Self-Hosted Support:** Yes — Dify is designed to be self-hosted via Docker/Docker Compose (or Kubernetes with community Helm charts). This is the deployment model WASL would need to verify in detail.
- **Cloud Requirements:** Compute for hosting the application, plus API access to whichever LLM provider is configured (proposed: Azure OpenAI).
- **AI Models Supported:** Broad multi-provider support, including OpenAI-compatible and Azure OpenAI endpoints, and various open-weight models — to be confirmed against the version WASL would deploy.

## Integration Options (Proposed)

- Azure OpenAI
- Azure AI Search
- n8n
- Jira
- Azure DevOps
- Microsoft Teams
- Internal WASL APIs

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

Would depend entirely on which use case is pursued. A RAG-style knowledge agent would need access to whatever document set it is meant to answer questions over — which must be limited to non-sensitive or explicitly approved data until a Security and Compliance review is complete.

## Security Considerations

Dify has not yet undergone a formal WASL Security Review. Known considerations to be assessed include: how the self-hosted deployment handles authentication/authorization for internal users, how uploaded documents (for RAG) are stored and whether they are encrypted at rest, what data (if any) is sent to third-party model providers versus staying within a self-hosted/Azure boundary, and the project's history of security advisories/CVEs. **Provisional classification: 🟡 Medium Risk**, pending review — this may change once a formal review is completed.

## Compliance Considerations

Not yet reviewed by Compliance/Legal. **This project has not been assessed for SAMA relevance and must not be described as compliant with any regulatory framework** until that review happens. License terms (Apache-2.0, to be reverified) should also be checked against WASL's open-source usage policy.

## Saudi Data Residency Considerations

Not yet verified. If Dify were self-hosted on Azure infrastructure within a Saudi Arabia region, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review, not assumption.

## Required Permissions

To be determined. Likely would require: an Azure subscription/resource group for hosting, Azure OpenAI resource access, and admin approval for any OAuth-based integrations (e.g. Microsoft Teams, Azure DevOps).

## Estimated Implementation Complexity

**Medium-High.** Self-hosting an application of this scope, integrating it with Azure OpenAI/Azure AI Search, and wiring up internal system integrations is a real engineering effort, though the platform itself is designed to reduce the effort of building individual agents once set up.

## Estimated Employee Value

**Medium-High (potential).** If successfully deployed with the use cases above, this could meaningfully reduce one-off AI tooling sprawl across departments. This estimate will be refined based on POC results.

## Dependencies

Docker/container runtime, a vector database (commonly bundled or configured separately), and an LLM provider (proposed: Azure OpenAI). Exact versions and dependency list should be confirmed against the specific release WASL evaluates.

## Known Limitations

To be assessed in detail during Security Review and POC. As with any actively developed open-source project, WASL should track upstream release notes for breaking changes and security advisories before and during any deployment.

## Proof of Concept Status

**No POC has been conducted yet.** This entry reflects Initial AI Review only.

## WASL Integrations

**None yet — evaluation stage only.** No Dify instance is currently connected to any WASL system or data source.

## How to Use

**This project is not yet approved for employee use.** It is being evaluated. Interested employees should express interest via the Request Access form below (for visibility into the evaluation) rather than attempting to self-deploy it against WASL data.

## How to Request Access

Use the [**Request Access to AI Tool**](../../.github/ISSUE_TEMPLATE/request-access.yml) issue form. Since this project is at Research status, requests will currently be logged as expressions of interest to help prioritize the evaluation, rather than resulting in immediate access.

## Documentation

- Upstream docs: see the [official Dify repository](https://github.com/langgenius/dify) for setup and usage documentation.
- Internal WASL setup/admin guides: not yet created — will be added if/when Dify progresses to Pilot.

## Original GitHub Repository

**https://github.com/langgenius/dify** — all credit for this project belongs to its original authors and contributors (Langgenius and the open-source community). This page describes WASL's evaluation of the project; it is not WASL's own software.

## Internal WASL Notes

Identified as a strong candidate platform for consolidating internal AI agent development due to its broad model support and workflow-builder approach. Next step is a scoped POC focused on one low-risk use case (e.g. a public/synthetic-data RAG assistant) before considering any use case involving internal or sensitive data.

## Review History

| Date | Reviewer | Notes |
|---|---|---|
| 2026-09-15 | WASL AI Marketplace maintainers | Initial catalog entry created at 🔵 Research status. No security or compliance review has been performed yet. |
