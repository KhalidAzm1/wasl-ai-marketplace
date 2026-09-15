/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Note: Next.js 16 removed the built-in `eslint` build-step integration
  // (see eslint.config.mjs) — run `npm run lint` separately in CI instead.
  // Deployment note (see /web/docs/architecture.md):
  // - Azure App Service / Vercel: run as a normal Next.js server (remove `output: "export"`).
  // - Azure Static Web Apps / GitHub Pages (dev preview only): uncomment the line below
  //   to produce a static export. Server-only routes (e.g. /api/*) will need to move to
  //   Azure Functions (Static Web Apps' managed API) in that mode.
  // output: "export",
};

export default nextConfig;
