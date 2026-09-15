# Getting Started

Welcome to the **WASL AI Marketplace** — WASL's internal catalog of AI tools, agents, automations, and frameworks being evaluated or used across the company.

## What this is (and isn't)

This is a curated, reviewed catalog — not a random list of GitHub links, and not a store where you can just click "install." Every project here is at a specific stage of evaluation (see [Status Definitions](status-definitions.md)), and using any tool beyond casual browsing requires going through the [Request Access](../.github/ISSUE_TEMPLATE/request-access.yml) process.

## For employees: how to use the marketplace

Employees use the **[WASL AI Marketplace web app](../web/)** — not this repository. It's a standalone Next.js application (see [`/web/docs/architecture.md`](../web/docs/architecture.md) for why it's built that way) that presents this same catalog as a searchable, filterable internal AI App Store, with Request Access and Suggest a Tool built in as normal web forms.

1. **Browse the catalog.** Open the web app to see what's available, filtered by category, status, or department.
2. **Read the tool page.** Every tool has a full page covering what it does, how WASL might use it, its status, and its security level. Start there before assuming a tool is ready to use.
3. **Check the status.** Only ✅ Approved and 🟢 Production tools are cleared for real work use, and only for their defined use cases. 🔵 Research and 🟡 Pilot tools are still being evaluated — do not connect them to real WASL, customer, or employee data.
4. **Request access** using the app's **Request Access** page if you want to use an Approved or Production tool.
5. **Suggest something new** using the app's **Suggest a Tool** page if you know of a useful AI project not yet in the catalog.

Technical contributors working directly in this repository can also use the underlying [Request Access](../.github/ISSUE_TEMPLATE/request-access.yml) and [Suggest a New AI Tool](../.github/ISSUE_TEMPLATE/suggest-ai-tool.yml) issue forms directly — the web app files the same kind of record behind the scenes.

## For reviewers / contributors

See the [Contribution Guide](contribution-guide.md) for how to add documentation, move a project through review, and keep the catalog structure intact.

## Key things to remember

- **No AI project may receive sensitive WASL, banking, customer, employee, or regulated data until appropriate security, legal and compliance approval is completed.** See [Security Classification](security.md).
- **Do not treat any project as SAMA compliant, or officially "secure," unless that has been formally reviewed and documented.**
- Dify and AnythingLLM — the marketplace's first two entries — are currently at 🔵 **Research** status. They are being evaluated, not deployed. Treat every use case described for them as **proposed**, not live.

## Quick links

- [Status Definitions](status-definitions.md)
- [Security Classification](security.md)
- [Governance Process](governance.md)
- [Contribution Guide](contribution-guide.md)
- [Project Template](../templates/ai-project-template.md)
