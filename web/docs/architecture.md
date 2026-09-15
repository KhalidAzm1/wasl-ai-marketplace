# WASL AI Marketplace — Web App Architecture

## The split: GitHub vs. the web app

The WASL AI Marketplace has two layers with distinct jobs. Confusing them is the mistake this document exists to prevent.

**GitHub (`wasl-ai-marketplace` repository) is the backend, source of truth, and governance layer.** It stores the catalog data, project documentation, review templates, security/compliance review records, governance history, issue tracking (tool suggestions, access requests, problem reports), pull requests, and this application's source code. It is where reviewers, maintainers, and technically-inclined contributors work.

**The web app (this `/web` directory) is the employee-facing product.** It is a standalone Next.js application that renders the catalog as a polished internal "AI App Store." Employees browse, search, filter, read tool detail pages, request access, and suggest tools entirely inside this app. They never need a GitHub account, never see repository file structure, and never need to understand what an "issue template" is.

Concretely: an employee clicking **Request Access** fills out a normal web form. Behind the scenes (see `src/app/api/request-access/route.ts`), the app *may* file that as a GitHub Issue for the maintainers to track — but that is an implementation detail of the backend, invisible to the employee. If WASL later swaps GitHub Issues for a different tracking system, the employee-facing form does not need to change at all.

## Why this separation matters

- **Usability.** GitHub's UI is built for developers. An "AI App Store" for a whole company needs search, filters, and cards a non-technical employee understands immediately.
- **Governance stays intact.** Review history, security review templates, and audit trail continue to live in GitHub exactly as designed — nothing about the governance process changes, only how employees *consume* the result of that governance.
- **Scalability.** The web app reads from a typed JSON data model (`src/data/tools.json`), not hard-coded components, so adding the 3rd, 30th, or 300th tool is a data change, not a code change.

## v1.1 / v1.2: internal WASL Agents and the shared agent platform

Starting in v1.1, the catalog holds two kinds of entry (see the `type` field on the `Tool` model in `src/types/tool.ts`):

- **`external-platform`** — a third-party/open-source platform WASL is evaluating as infrastructure (Dify, AnythingLLM in v1.0; Langfuse, Flowise, and Open WebUI added in v1.2).
- **`internal-agent`** — a WASL-specific agent *concept* (e.g. WASL Regulatory Copilot, WASL Data Analyst). These are **not separate external GitHub projects** and are **not deployed** — every one of them is a Research-stage concept write-up, same governance pipeline as any other catalog entry. v1.2 added four more (IT Helpdesk, Cybersecurity, Customer Support, Legal Contract) alongside the original ten from v1.1, for fourteen total.

The fourteen internal agents added so far are proposed to share one platform rather than each getting bespoke infrastructure:

```
Employee
   │
   ▼
WASL Marketplace / Replit App      (employee-facing UI layer)
   │
   ▼
n8n                                (orchestration, integrations, automation)
   │
   ▼
Agent Logic
   │
   ▼
Azure OpenAI + Azure AI Search + Approved Internal Systems
   │
   ▼
Output / Action / Human Approval
```

**Why a shared platform, not per-agent infrastructure:** fourteen agents each provisioning their own hosting, auth, and integration plumbing would multiply both engineering effort and the Security Review surface area. A shared platform means one hosting environment, one integration layer, and one set of security controls to review — individual agents differ in their *logic* (prompts, workflows, data sources), not their infrastructure.

Langfuse (see the catalog entry and `projects/langfuse/README.md`) is proposed as a complementary observability layer that would sit alongside this pipeline once any agent reaches a real build — not a replacement for any layer above, and not yet provisioned either.

### Replit vs. n8n vs. Azure OpenAI vs. Azure AI Search — responsibilities

| Layer | Responsible for |
|---|---|
| **Replit** | Employee UI: chat interface, agent pages, dashboards, file upload, results display, approval buttons, history. |
| **n8n** | Workflow orchestration, system integrations (Jira, Azure DevOps, Microsoft Teams, email, internal APIs), scheduled jobs, notifications, approval routing, data movement between systems. |
| **Azure OpenAI** | LLM reasoning: generation, classification, analysis, summarization. |
| **Azure AI Search** | Retrieval over approved internal knowledge (policies, documentation) for RAG-grounded answers with citations. |

This split is proposed, not built. No Replit app, n8n instance, or Azure resource has been provisioned for any internal agent as of this write-up — see each agent's `projects/<slug>/README.md` for its individual "Suggested Architecture" section.

### Human approval is a first-class field, not an afterthought

Every internal agent's catalog entry carries a `humanApprovalRequired` field. Where true (all fourteen internal agents currently set this, v1.1 and v1.2 alike), the entry's Security & Compliance section on the detail page explicitly states that irreversible actions, financial transactions, external communications, or writes to systems of record must be confirmed by a person — the agent proposes, a human decides. This is a design constraint carried into the data model, not just prose.

### POC roadmap

Internal agents carry a `pocOrder` field reflecting the marketplace maintainers' recommended build order (1 = build first, 14 = last of the current set). This is rendered as a roadmap section on the marketplace homepage, referenced from `/docs/governance.md`, and shown as a sortable list on the `/review` page (see "Review Queue and Compare" below). It is an initial recommendation pending PMO/leadership sign-off — not a committed schedule, and not a claim that any agent is being actively built.

### Review Queue and Compare (v1.2)

Two read-only pages added in v1.2, both computed entirely from the existing `tools.json` data with no new fields:

- **`/review`** (`src/app/review/page.tsx`, backed by `getReviewQueue()` in `src/lib/tools.ts`) — every catalog entry still at Research status, internal agents first (sorted by `pocOrder`) then external platforms (sorted by name). Meant for marketplace maintainers to see what still needs a decision, at a glance, without cross-referencing GitHub issues by hand. It does not move anything through the governance pipeline itself — status changes still happen the normal way (a Pull Request updating `tools.json`, per the Contribution Guide).
- **`/compare`** (`src/app/compare/page.tsx` + `CompareClient.tsx`) — select up to three tools or agents and see their type, status, security level, target users, priority, human-approval flag, deployment model, and integrations side by side. Selection is carried in the URL's `ids` query parameter (e.g. `/compare?ids=dify,langfuse`) rather than browser storage, so a comparison can be bookmarked or shared with a link.

## Data flow

```
Maintainer reviews/updates a tool
        │
        ▼
/projects/<slug>/README.md  (GitHub — full governance record, human-readable)
        │
        │  (kept in sync manually today; see "Future: single-sourcing" below)
        ▼
/web/src/data/tools.json    (web app — structured data the UI renders)
        │
        ▼
Next.js pages (statically generated from the JSON at build time)
        │
        ▼
Employee sees a fast, searchable marketplace
```

### Future: single-sourcing the data

Today, `tools.json` is maintained by hand alongside each project's GitHub README so the web app has no runtime dependency on GitHub's API (important, since this app may be deployed somewhere with no outbound access to github.com). As the catalog grows past a few dozen tools, consider one of:

1. **Build-time sync script** — a small script (run in CI) that parses each `/projects/<slug>/README.md`'s frontmatter/table and regenerates `tools.json`, so maintainers only ever edit the GitHub-side Markdown.
2. **Headless CMS or database** — once the catalog is large enough that Markdown-parsing is fragile, move the structured fields into a small database (e.g. Azure SQL, Cosmos DB, or even a headless CMS) and keep the GitHub README as the narrative/governance record that links to it.

Either path preserves the core rule: **GitHub (or whatever replaces the governance record) is authored by reviewers; the web app is generated from it, never the other way around.**

## Request Access & Suggest Tool flows

Both forms POST to a Next.js API route (`/api/request-access`, `/api/suggest-tool`). In production, configure `GITHUB_TOKEN`, `GITHUB_OWNER`, and `GITHUB_REPO` (see `.env.example`) so these routes file a real GitHub Issue using a **fine-grained personal access token or GitHub App installation token scoped only to `Issues: write` on this one repository** — never a broad admin token. Without those environment variables configured, the routes safely acknowledge the submission without pretending it was filed anywhere durable (see the code comments in each route).

## Deployment targets

The app is a standard Next.js 14 App Router project and can run in any of these modes:

| Target | Mode | Notes |
|---|---|---|
| **Azure App Service** | Node.js server (`next start`) | Recommended for production — supports the API routes (Request Access / Suggest Tool) out of the box. |
| **Azure Static Web Apps** | Static export (`output: "export"` in `next.config.mjs`) + Azure Functions | The static export mode is scaffolded (see the commented line in `next.config.mjs`) but API routes would need to move to Static Web Apps' managed Azure Functions integration, since a static export has no Node server. |
| **Vercel** | Default Next.js hosting | Fine for a **temporary prototype/demo only**, per WASL's instruction not to treat external hosting as the final architecture. |
| **GitHub Pages** | Static export | Development preview only, same limitation as Static Web Apps (no server-side API routes) — **not the final enterprise architecture.** |
| **Internal WASL infrastructure** | Node.js server or containerized (Dockerfile not yet included — straightforward to add: a standard `node:20-alpine` multi-stage build) | Likely destination for a fully internal deployment once IT/infrastructure requirements are confirmed. |

No paid service has been activated as part of this build. Choosing and provisioning a target is a deliberate next step for WASL, not something performed automatically here.

## Authentication readiness (not yet implemented)

The app currently has **no authentication** — this is a deliberate placeholder state, not an oversight, per the instruction not to build fake/mock auth. Here is the planned flow for when real authentication is added:

```
Employee
   │
   ▼
Microsoft Entra ID (Azure AD) Login
   │  (WASL's existing corporate identity — employees use their normal Microsoft account)
   ▼
WASL AI Marketplace (this Next.js app)
   │  validates the Entra ID token, reads the employee's group/role claims
   ▼
Role / Department Access
   │  (see "Future access model" below)
   ▼
Approved AI Tools
   (tool visibility and Request Access eligibility filtered by role/department)
```

**Recommended implementation path:** [NextAuth.js](https://next-auth.js.org/) (or its successor, Auth.js) with the Azure AD / Microsoft Entra ID provider, using the WASL tenant's app registration. This is a well-trodden integration for Next.js and avoids hand-rolling OAuth/OIDC token handling. The `.env.example` file reserves the expected environment variable names (`AZURE_AD_CLIENT_ID`, `AZURE_AD_CLIENT_SECRET`, `AZURE_AD_TENANT_ID`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`) so wiring this in later is a scoped, additive change rather than a rearchitecture.

Until this is implemented, treat the deployed app as **internal-network-only** (e.g. behind WASL's VPN or internal load balancer) rather than exposed to the open internet, since there is no login gate yet.

## Future access model (structure only — not built yet)

The data model and routing are structured so role-based access can be layered in later without a rewrite:

- **Employee** — default role once Entra ID login exists; sees the catalog, can request access and suggest tools.
- **Department Admin** — could approve/deny Request Access submissions for their department.
- **AI Team Reviewer** — performs Initial AI Review (see `/docs/governance.md` in the repo root).
- **Security Reviewer** — completes Security Review templates; could gain a UI to update a tool's `securityLevel`.
- **Compliance Reviewer** — completes Compliance/Legal Review.
- **Marketplace Admin** — can change a tool's `status`, edit catalog data, manage the taxonomy.

None of these roles are enforced in code today — there is no RBAC middleware, no per-role UI, and no permission checks. This section exists so the next engineer knows the intended shape rather than guessing, per the instruction not to over-engineer this now.

## What is genuinely done vs. what is scaffolding

To be explicit about the current state:

- **Done and functional:** the full employee-facing browsing experience (search, category/status/department filters, tool cards, tool detail pages), the reusable JSON data model, and the Request Access / Suggest Tool forms and their API routes (which work correctly and will file real GitHub Issues the moment `GITHUB_TOKEN` is configured).
- **Scaffolding only (documented, not implemented):** authentication, RBAC, the build-time GitHub↔JSON sync script, and a Dockerfile for internal hosting. These are called out explicitly rather than faked, per WASL's instruction not to implement fake authentication or claim functionality that doesn't exist.
