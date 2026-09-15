# WASL AI Marketplace

**An internal, curated catalog of AI tools, agents, automations, and frameworks for WASL employees.**

> 🔒 This repository is **private** and intended for internal WASL use only.

---

## Two layers, one product

This repository is the **backend, source of truth, and governance layer** — it holds catalog data, project documentation, review templates, security/compliance review records, governance history, and issue tracking for tool suggestions and access requests.

**Employees do not use this repository directly.** The actual "WASL AI Marketplace" they interact with is a standalone web application in [`/web`](web/) — a searchable, filterable internal AI App Store built with Next.js. It renders the same catalog you see documented here, but as a polished product, not a GitHub file browser. See [`/web/docs/architecture.md`](web/docs/architecture.md) for the full explanation of this split, including how the Request Access and Suggest Tool forms work behind the scenes, deployment targets, and the plan for adding Microsoft Entra ID (Azure AD) login later.

If you're a maintainer, reviewer, or technical contributor, you'll work in this repository. If you're an employee looking to discover or request an AI tool, go to the [web app](web/) instead (see [`/web/README.md`](web/README.md) to run it locally, pending its internal deployment).

## What this is

The WASL AI Marketplace is WASL's internal "AI App Store" — a single, structured place where employees can discover useful AI tools (open-source and internally built), understand what each one does and how it might help their work, see whether WASL has reviewed and approved it, and know exactly what's required to actually use it.

This is deliberately **not** a bare list of GitHub links. Every tool in the catalog has a full write-up covering its purpose, potential WASL use cases, architecture, security classification, compliance considerations, and review status — see the [standard project template](templates/ai-project-template.md). That write-up is mirrored into the web app's [`tools.json`](web/src/data/tools.json) data file, which is what employees actually see.

## Why it exists

AI tooling is spreading fast, and without a shared catalog, WASL risks duplicated effort (multiple teams evaluating the same tools independently), unreviewed risk (AI tools connected to sensitive data without security or compliance sign-off), and low awareness (employees not knowing what's already been vetted, or how to ask for something new). This marketplace exists to make AI adoption at WASL **visible, reviewed, and safe**, while still moving quickly.

## How employees use it

1. Open the **[WASL AI Marketplace web app](web/)** — see its README for how to run it, and the deployment section below for where it will eventually live inside WASL's infrastructure.
2. Search, filter by category/status/department, and read a tool's detail page to understand what it does, its status, and its security level.
3. Click **Request Access** or **Suggest a Tool** directly in the app. No GitHub account or knowledge of this repository is required.

Technical readers who want the full governance record behind any tool (review history, security review notes, etc.) can still browse [`/projects`](projects/) directly here.

## Categories

The catalog is organized into scalable categories so it can grow to dozens or hundreds of tools over time:

`AI Assistants` · `Automation` · `Knowledge & RAG` · `Meetings` · `Product & Business` · `Developers` · `Data & Analytics` · `Marketing` · `Finance` · `HR` · `Compliance & Legal` · `Cybersecurity` · `Research`

## Current catalog

| Tool | Category | Status | Security | Original Repository |
|---|---|---|---|---|
| [Dify](projects/dify/README.md) | AI Assistants / Automation | 🔵 Research | 🟡 Medium Risk | [langgenius/dify](https://github.com/langgenius/dify) |
| [AnythingLLM](projects/anythingllm/README.md) | AI Assistants / Knowledge & RAG | 🔵 Research | 🟡 Medium Risk | [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) |

Both tools are at **🔵 Research** status — they are being evaluated, not deployed. All use cases described on their pages (here and in the web app) are proposed, not live.

## How to suggest an AI tool

Use the **Suggest a Tool** page in the [web app](web/), or — for technical contributors working directly in GitHub — open a [**Suggest a New AI Tool**](.github/ISSUE_TEMPLATE/suggest-ai-tool.yml) issue. See [`docs/contribution-guide.md`](docs/contribution-guide.md) for the full process, including how to draft a full catalog entry via Pull Request.

## How to request access

Use the **Request Access** page in the [web app](web/), or open a [**Request Access to AI Tool**](.github/ISSUE_TEMPLATE/request-access.yml) issue directly. Access is only granted for ✅ Approved or 🟢 Production tools, for their defined use cases.

## Status definitions

| Status | Meaning |
|---|---|
| 🔵 Research | Being evaluated. |
| 🟡 Pilot | Currently being tested with a limited group. |
| ✅ Approved | Approved for defined WASL use cases. |
| 🟢 Production | Actively used at WASL. |
| 🔴 Rejected | Reviewed but not approved. |
| ⚫ Deprecated | Previously used, no longer recommended. |

Full definitions: [`docs/status-definitions.md`](docs/status-definitions.md).

## Security reminder

> **No AI tool may receive sensitive WASL, banking, customer, employee, or regulated data until appropriate security, legal, and compliance approval is completed.**
> **No tool may be described as SAMA compliant, or officially "secure," unless that has been formally reviewed and approved.**

Full details: [`docs/security.md`](docs/security.md).

## Governance

Tools move through a lightweight, risk-proportionate review pipeline: **Suggested → Initial AI Review → Security Review (if required) → Compliance/Legal Review (if required) → POC → Decision (Approved / Production / Rejected)**. Not every tool needs every stage — see [`docs/governance.md`](docs/governance.md). This workflow lives in GitHub; the web app presents its outcome (the tool's current status) simply, without exposing the process itself to employees.

## Repository structure

```
/
├── README.md
├── docs/                    # Governance, security, contribution, status docs (backend/reviewer-facing)
│   ├── getting-started.md
│   ├── governance.md
│   ├── security.md
│   ├── contribution-guide.md
│   └── status-definitions.md
├── projects/                # Full governance write-up per tool (source of truth)
│   ├── dify/README.md
│   └── anythingllm/README.md
├── templates/
│   ├── ai-project-template.md
│   ├── security-review-template.md
│   └── poc-review-template.md
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── suggest-ai-tool.yml
│   │   ├── request-access.yml
│   │   └── report-problem.yml
│   └── PULL_REQUEST_TEMPLATE.md
└── web/                     # ⭐ The actual employee-facing marketplace (Next.js app)
    ├── src/data/tools.json   # Structured catalog data the app renders
    ├── src/app/               # Pages: home, tool detail, request access, suggest tool
    └── docs/architecture.md  # GitHub-vs-app split, auth readiness, deployment targets
```

## Contributing

See [`docs/contribution-guide.md`](docs/contribution-guide.md) for how to suggest tools, draft documentation, and move tools through review without disrupting the catalog's structure. See [`/web/README.md`](web/README.md) for how to add a new tool to the web app's data model once it's been through Initial AI Review.

## License

Internal WASL documentation and application code in this repository are for internal use. Cataloged third-party projects (e.g. Dify, AnythingLLM) remain the property of their original authors under their own licenses — always refer to the original repository linked on each tool's page.
