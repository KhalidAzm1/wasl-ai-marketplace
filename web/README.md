# WASL AI Marketplace — Web App

This is the **employee-facing product**: a Next.js application that renders the catalog as a searchable, filterable internal AI App Store. See [`docs/architecture.md`](docs/architecture.md) for the full split between this app and the GitHub repository it lives in (GitHub is the backend/governance layer; this is the UI employees actually use).

## Getting started

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local development server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check with no output |

## Project structure

```
web/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── page.tsx           # Homepage (search, filters, tool cards)
│   │   ├── tools/[id]/         # Tool detail pages (dynamic route)
│   │   ├── request-access/    # Request Access form page
│   │   ├── suggest-tool/      # Suggest a Tool form page
│   │   └── api/                # Server routes backing the two forms
│   ├── components/            # Reusable UI (Header, ToolCard, badges, forms, filters)
│   ├── data/
│   │   ├── tools.json          # ⭐ The catalog — add new tools here, not in components
│   │   └── taxonomy.ts         # Categories, departments, status/security metadata
│   ├── lib/tools.ts            # Data access helpers
│   └── types/tool.ts           # The `Tool` type every catalog entry must satisfy
└── docs/architecture.md       # GitHub-vs-app split, auth readiness, deployment targets
```

## Adding a new tool

1. Add an entry to `src/data/tools.json` following the `Tool` shape in `src/types/tool.ts`.
2. Also add (or update) the corresponding full write-up at `/projects/<slug>/README.md` in the repository root — that remains the governance record of truth (see the root [`docs/governance.md`](../docs/governance.md)).
3. That's it — the homepage, filters, and a detail page at `/tools/<id>` are generated automatically. No component changes needed.

## Environment variables

Copy `.env.example` to `.env.local` for local development. See that file's comments and [`docs/architecture.md`](docs/architecture.md) for what each variable does — none are required to browse the marketplace; `GITHUB_TOKEN`/`GITHUB_OWNER`/`GITHUB_REPO` are only needed to make the Request Access / Suggest Tool forms file real GitHub Issues.
