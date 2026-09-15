# Contribution Guide

The WASL AI Marketplace grows through contributions from across the company. This guide explains how to contribute **without breaking the catalog's structure or making unreviewed claims**.

## How to suggest a project

Open a [**Suggest a New AI Tool**](../.github/ISSUE_TEMPLATE/suggest-ai-tool.yml) issue. This is the easiest way to contribute and requires no Git/Markdown knowledge. The issue is automatically labeled `new-ai-tool` and picked up by a maintainer for Initial AI Review (see [Governance](governance.md)).

## How to add documentation

If you're comfortable with Git and Markdown and want to draft a full catalog entry yourself:

1. Copy [`/templates/ai-project-template.md`](../templates/ai-project-template.md) to a new folder: `/projects/<project-slug>/README.md`.
2. Fill in **every section** — write "N/A" or "Not yet assessed" rather than deleting a section.
3. Default the **Status** field to 🔵 Research unless a maintainer has told you otherwise.
4. Be factual. Do not describe proposed use cases as if they were already deployed, and do not make compliance or security claims that haven't been formally reviewed.
5. Open a Pull Request. Reference the related suggestion issue if one exists.

## How projects are reviewed

See [`governance.md`](governance.md) for the full pipeline (Suggested → Initial AI Review → Security Review → Compliance/Legal Review → POC → Decision). Review depth scales with the project's security classification — not every project needs every stage.

## Who approves projects

- New catalog entries at Research status: any marketplace maintainer.
- Status changes to Approved, Production, Rejected, or Deprecated: the marketplace governance owner(s), informed by any completed Security and/or Compliance reviews.
- Documentation-only fixes (typos, broken links, clarifications): any maintainer, no formal review required.

## How status changes work

1. Complete whatever reviews are required for the target status (see [Governance](governance.md)).
2. Update the project's summary table (Status field) and its **Review History** table with the date, reviewer, and reason for the change.
3. Open a Pull Request. Do not edit status directly on `main` without review — even maintainers should use a PR so the change is visible.
4. Once merged, update the project's card on the [marketplace website](../site/index.html) to match.

## How security concerns are reported

Use the **Report a Problem** issue template, or contact the project's listed Owner/Reviewer directly. Do not post details of an active, unpatched vulnerability in a public issue — see [`security.md`](security.md).

## Using Pull Requests for catalog changes

All catalog content changes (new projects, status updates, corrections to use cases, website content) should go through a Pull Request, even for maintainers. This keeps a visible history of who changed what and why, and gives other reviewers a chance to catch inaccurate claims before they go live.

## Style rules for all contributions

- Never claim a project is "approved," "production," "SAMA compliant," or "secure" unless that is formally true and documented.
- Always distinguish **proposed/potential** use cases from **actual, deployed** functionality.
- Always link back to the original upstream GitHub repository — never present an external open-source project as WASL's own creation.
- Do not commit credentials, API keys, tokens, internal URLs that require authentication context to be meaningful, or any sensitive WASL data into this repository.
