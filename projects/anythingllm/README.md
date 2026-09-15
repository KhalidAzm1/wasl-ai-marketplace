# AnythingLLM

> Open-source, self-hostable ChatGPT-style workspace platform with knowledge bases and RAG — being evaluated as a possible internal WASL knowledge assistant.

| Field | Value |
|---|---|
| **Category** | AI Assistants / Knowledge Management |
| **Status** | 🔵 Research |
| **Security Classification** | 🟡 Medium Risk *(pending formal Security Review — see note below)* |
| **Official Repository** | https://github.com/Mintplex-Labs/anything-llm |
| **License** | MIT (verify current license terms on the upstream repository before any deployment decision) |
| **Last Reviewed** | 2026-09-15 |
| **Owner / Reviewer** | WASL AI Marketplace maintainers (Initial AI Review) |
| **Target Users** | All employees (as a knowledge assistant), Department knowledge owners (as workspace admins) |

> Status and Security Classification meanings are defined centrally in [`/docs/status-definitions.md`](../../docs/status-definitions.md) and [`/docs/security.md`](../../docs/security.md).

---

## ⚠️ Evaluation Notice

**We are currently evaluating AnythingLLM as a possible internal WASL GPT / knowledge assistant.** Nothing described on this page is deployed, approved, or connected to WASL production data. All integrations, workspaces, and use cases below are **proposed and illustrative only**, pending formal review under WASL's [governance process](../../docs/governance.md).

## Business Problem

Employees frequently need to find answers buried in internal documentation, policies, product specs, and departmental knowledge — but that knowledge is scattered across systems and hard to search. A self-hosted, ChatGPT-style interface over approved internal knowledge could reduce time spent searching and repeatedly asking colleagues the same questions, while keeping data under WASL's own control.

## What It Does

AnythingLLM is an open-source, self-hostable application that provides a ChatGPT-like chat interface backed by custom knowledge bases. It supports "workspaces" that isolate different document sets and conversations from each other, Retrieval-Augmented Generation (RAG) over uploaded documents, multi-user accounts with role-based access control, and support for multiple LLM providers (including Azure OpenAI) and multiple vector database backends.

## Why WASL Might Use It

If evaluation succeeds, AnythingLLM could become an internal, WASL-controlled alternative to public consumer AI chat tools for answering questions against approved internal documentation — with workspace isolation making it possible to scope different knowledge sets to different departments or sensitivity levels.

## Example WASL Use Cases

The following are **potential workspaces under consideration**, not already-built functionality. In each case, employees would ask questions against **approved internal knowledge only** — never open-ended or unreviewed data:

- WASL Knowledge — general company knowledge and policies
- Banking — banking product and process documentation
- Product — product specifications and documentation
- Business Analysis — BA templates, frameworks, and reference material
- Compliance — approved compliance documentation
- Finance — internal finance process documentation
- HR — HR policies and employee-facing FAQs
- Marketing — brand guidelines and marketing reference material
- Technology — internal technical documentation and runbooks

## Technical Architecture

AnythingLLM is a self-hostable application (Docker deployment is the common path) with a chat front end, a document ingestion/embedding pipeline, a vector database layer (pluggable — e.g. LanceDB, Pinecone, Chroma, and others depending on configuration), and a connector layer to LLM providers.

## Deployment Options

- **Self-Hosted Support:** Yes — designed for self-hosting via Docker, with a desktop app version also available for local single-user use.
- **Cloud Requirements:** Compute for hosting, plus API access to a configured LLM provider (proposed: Azure OpenAI) and a vector database (self-hosted or managed).
- **AI Models Supported:** Broad multi-provider support including Azure OpenAI — to be confirmed against the specific version WASL would deploy.

## Integration Options (Proposed)

- Azure OpenAI
- Azure AI Search
- WASL Knowledge Base
- Internal company documents
- Department-specific knowledge stores
- Internal APIs

None of these integrations have been built yet. They represent plausible integration points identified during Initial AI Review.

## Data Requirements

Whatever documents are uploaded to a given workspace become searchable within that workspace. Document sets must be limited to non-sensitive or explicitly approved data until a Security and Compliance review is complete — this is especially important given the Banking, Finance, and Compliance workspace ideas listed above.

## Security Considerations

AnythingLLM has not yet undergone a formal WASL Security Review. Known considerations to be assessed include: workspace-level access control granularity (can WASL guarantee an employee only sees the workspaces they're authorized for?), how uploaded documents are stored and whether they are encrypted at rest, what data (if any) leaves the self-hosted boundary when calling an LLM provider, and the project's history of security advisories/CVEs. **Provisional classification: 🟡 Medium Risk**, pending review — this is likely to be reassessed **per workspace**, since a "Banking" or "Compliance" workspace would carry materially higher risk than a "WASL Knowledge" general-FAQ workspace.

## Compliance Considerations

Not yet reviewed by Compliance/Legal. **This project has not been assessed for SAMA relevance and must not be described as compliant with any regulatory framework** until that review happens, particularly for any workspace touching banking or financial documentation. License terms (MIT, to be reverified) should also be checked against WASL's open-source usage policy.

## Saudi Data Residency Considerations

Not yet verified. If AnythingLLM were self-hosted on Azure infrastructure within a Saudi Arabia region, and paired with an in-region vector database and Azure OpenAI deployment, data residency could plausibly be maintained — but this requires explicit technical verification during Security Review, not assumption.

## Required Permissions

To be determined. Likely would require: an Azure subscription/resource group for hosting, Azure OpenAI resource access, a vector database resource, and department sign-off before any department-specific workspace (e.g. Banking, Compliance) is populated with real content.

## Estimated Implementation Complexity

**Medium.** The application itself is relatively straightforward to self-host; the complexity lies in defining workspace access control policy, sourcing and curating approved documents per department, and completing security/compliance review for higher-sensitivity workspaces.

## Estimated Employee Value

**High (potential).** A well-curated internal knowledge assistant addresses a widely felt pain point (finding internal information quickly). This estimate will be refined based on POC results, likely starting with the lowest-risk workspace (e.g. WASL Knowledge/general FAQs).

## Dependencies

Docker/container runtime, a vector database backend, and an LLM provider (proposed: Azure OpenAI). Exact versions and dependency list should be confirmed against the specific release WASL evaluates.

## Known Limitations

To be assessed in detail during Security Review and POC, including how well workspace isolation holds up under multi-department use and how document update/versioning is handled operationally.

## Proof of Concept Status

**No POC has been conducted yet.** This entry reflects Initial AI Review only.

## WASL Integrations

**None yet — evaluation stage only.** No AnythingLLM instance is currently connected to any WASL system or data source. No workspace listed above currently exists.

## How to Use

**This project is not yet approved for employee use.** It is being evaluated. Interested employees should express interest via the Request Access form below (for visibility into the evaluation) rather than attempting to self-deploy it against WASL data.

## How to Request Access

Use the [**Request Access to AI Tool**](../../.github/ISSUE_TEMPLATE/request-access.yml) issue form. Since this project is at Research status, requests will currently be logged as expressions of interest to help prioritize the evaluation, rather than resulting in immediate access.

## Documentation

- Upstream docs: see the [official AnythingLLM repository](https://github.com/Mintplex-Labs/anything-llm) for setup and usage documentation.
- Internal WASL setup/admin guides: not yet created — will be added if/when AnythingLLM progresses to Pilot.

## Original GitHub Repository

**https://github.com/Mintplex-Labs/anything-llm** — all credit for this project belongs to its original authors and contributors (Mintplex Labs and the open-source community). This page describes WASL's evaluation of the project; it is not WASL's own software.

## Internal WASL Notes

Identified as a strong candidate for a low-risk first POC (starting with a general "WASL Knowledge" workspace using only public/non-sensitive internal documentation) before considering any higher-sensitivity workspace such as Banking or Compliance, each of which would need its own dedicated Security and Compliance review.

## Review History

| Date | Reviewer | Notes |
|---|---|---|
| 2026-09-15 | WASL AI Marketplace maintainers | Initial catalog entry created at 🔵 Research status. No security or compliance review has been performed yet. |
