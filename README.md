# WASL AI Marketplace
**👈 للموظفين: الوكلاء الجاهزة للاستخدام في مجلد agents**

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

## Two kinds of catalog entry

Since **v1.1**, the catalog distinguishes two kinds of entry, both governed by the same Research → Production pipeline:

- **AI Platforms** (`type: external-platform`) — third-party or open-source software WASL is evaluating as possible infrastructure (Dify, AnythingLLM). These remain unchanged from v1.0.
- **Internal WASL Agents** (`type: internal-agent`) — WASL-specific agent *concepts* proposed to be built on WASL's own shared agent platform (Replit + n8n + Azure OpenAI + Azure AI Search), not separate external GitHub projects. See [`/web/docs/architecture.md`](web/docs/architecture.md) for the shared-platform design and the Replit/n8n/Azure OpenAI/Azure AI Search responsibility split.

The web app clearly labels each entry (`🧩 WASL Internal Concept` vs `🔌 External Platform`) and filters by type so employees never confuse a platform WASL might adopt with a WASL-built product.

## Categories

The catalog is organized into scalable categories so it can grow to dozens or hundreds of tools over time:

`AI Assistants` · `Automation` · `Knowledge & RAG` · `Meetings` · `Product & Business` · `Developers` · `Data & Analytics` · `Marketing` · `Finance` · `HR` · `Compliance & Legal` · `Cybersecurity` · `Research` · `PMO / Management` · `Banking / Operations` · `Business Development / Partnerships`

## Current catalog

### AI Platforms

| Tool | Category | Status | Security | Original Repository |
|---|---|---|---|---|
| [Dify](projects/dify/README.md) | AI Assistants / Automation | 🔵 Research | 🟡 Medium Risk | [langgenius/dify](https://github.com/langgenius/dify) |
| [AnythingLLM](projects/anythingllm/README.md) | AI Assistants / Knowledge & RAG | 🔵 Research | 🟡 Medium Risk | [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) |
| [Langfuse](projects/langfuse/README.md) | Developers / Data & Analytics | 🔵 Research | 🟡 Medium Risk | [langfuse/langfuse](https://github.com/langfuse/langfuse) |
| [Flowise](projects/flowise/README.md) | Automation / AI Assistants | 🔵 Research | 🟡 Medium Risk | [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) |
| [Open WebUI](projects/open-webui/README.md) | AI Assistants | 🔵 Research | 🟡 Medium Risk | [open-webui/open-webui](https://github.com/open-webui/open-webui) |

### Internal WASL Agents (added as Research-stage concepts)

| Agent | Category | Status | Security | Priority | POC Order |
|---|---|---|---|---|---|
| [WASL Product & BA Copilot](projects/wasl-product-ba-copilot/README.md) | Product & Business | 🔵 Research | 🟡 Medium Risk | Very High | 1 |
| [WASL Regulatory Copilot](projects/wasl-regulatory-copilot/README.md) | Compliance & Legal | 🔵 Research | 🔴 High Risk | Very High | 2 |
| [WASL Data Analyst](projects/wasl-data-analyst/README.md) | Data & Analytics | 🔵 Research | 🔴 High Risk | Very High | 3 |
| [WASL Executive PMO Agent](projects/wasl-executive-pmo-agent/README.md) | PMO / Management | 🔵 Research | 🟡 Medium Risk | Very High | 4 |
| [WASL Banking Ops Agent](projects/wasl-banking-ops-agent/README.md) | Banking / Operations | 🔵 Research | 🔴 High Risk | Very High | 5 |
| [WASL Finance Ops Agent](projects/wasl-finance-ops-agent/README.md) | Finance | 🔵 Research | 🔴 High Risk | High | 6 |
| [WASL HR Copilot](projects/wasl-hr-copilot/README.md) | HR | 🔵 Research | 🔴 High Risk | High | 7 |
| [WASL Growth Agent](projects/wasl-growth-agent/README.md) | Marketing | 🔵 Research | 🟡 Medium Risk | High | 8 |
| [WASL Dev Review Agent](projects/wasl-dev-review-agent/README.md) | Developers | 🔵 Research | 🟡 Medium Risk | High | 9 |
| [WASL BD Intelligence Agent](projects/wasl-bd-intelligence-agent/README.md) | Business Development / Partnerships | 🔵 Research | 🟡 Medium Risk | High | 10 |
| [WASL IT Helpdesk Agent](projects/wasl-it-helpdesk-agent/README.md) | Automation / Developers | 🔵 Research | 🟡 Medium Risk | Medium | 11 |
| [WASL Cybersecurity Copilot](projects/wasl-cybersecurity-copilot/README.md) | Cybersecurity / Compliance & Legal | 🔵 Research | 🔴 High Risk | Medium | 12 |
| [WASL Customer Support Copilot](projects/wasl-customer-support-copilot/README.md) | Automation / Knowledge & RAG | 🔵 Research | 🔴 High Risk | Medium | 13 |
| [WASL Legal Contract Copilot](projects/wasl-legal-contract-copilot/README.md) | Compliance & Legal | 🔵 Research | 🔴 High Risk | Medium | 14 |

All 19 catalog entries are at **🔵 Research** status — none are built, deployed, approved, or SAMA compliant. All capabilities, use cases, and integrations described on their pages (here and in the web app) are proposed, not live. Security classifications above are an **initial assessment pending formal Security Review**, not a final determination.

The POC Order column reflects the marketplace maintainers' recommended internal-agent build order — an initial recommendation pending PMO/leadership sign-off, not a committed schedule. It's also shown as a roadmap on the marketplace homepage and as a sortable list on the web app's **Review Queue** page (`/review`) — see [`/web/docs/architecture.md`](web/docs/architecture.md) for what that page does.

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
├── projects/                # Full governance write-up per tool/agent (source of truth)
│   ├── dify/README.md
│   ├── anythingllm/README.md
│   └── wasl-*/README.md     # 14 internal WASL Agent concepts (v1.1 + v1.2)
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
    ├── src/app/               # Pages: home, tool detail, request access, suggest tool, review queue, compare
    └── docs/architecture.md  # GitHub-vs-app split, auth readiness, deployment targets
```

## Contributing

See [`docs/contribution-guide.md`](docs/contribution-guide.md) for how to suggest tools, draft documentation, and move tools through review without disrupting the catalog's structure. See [`/web/README.md`](web/README.md) for how to add a new tool to the web app's data model once it's been through Initial AI Review.

## License

Internal WASL documentation and application code in this repository are for internal use. Cataloged third-party projects (e.g. Dify, AnythingLLM) remain the property of their original authors under their own licenses — always refer to the original repository linked on each tool's page.
