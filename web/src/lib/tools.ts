import toolsData from "@/data/tools.json";
import type { Tool } from "@/types/tool";

const TOOLS = toolsData as Tool[];

/** All tools in the catalog, in data-file order. */
export function getAllTools(): Tool[] {
  return TOOLS;
}

/** Look up a single tool by its id/slug. */
export function getToolById(id: string): Tool | undefined {
  return TOOLS.find((t) => t.id === id);
}

/** All ids, for generateStaticParams. */
export function getAllToolIds(): string[] {
  return TOOLS.map((t) => t.id);
}

export function getFeaturedTools(limit = 3): Tool[] {
  return [...TOOLS].slice(0, limit);
}

export function getRecentlyAdded(limit = 6): Tool[] {
  return [...TOOLS]
    .sort((a, b) => (a.lastReviewed < b.lastReviewed ? 1 : -1))
    .slice(0, limit);
}

export function getCatalogStats() {
  const total = TOOLS.length;
  const byStatus = TOOLS.reduce<Record<string, number>>((acc, t) => {
    acc[t.status] = (acc[t.status] ?? 0) + 1;
    return acc;
  }, {});
  const categoriesCovered = new Set(
    TOOLS.flatMap((t) => [t.category, t.secondaryCategory].filter(Boolean))
  ).size;
  const internalAgents = TOOLS.filter((t) => t.type === "internal-agent").length;
  const externalPlatforms = TOOLS.filter((t) => t.type === "external-platform").length;
  return { total, byStatus, categoriesCovered, internalAgents, externalPlatforms };
}

/** All WASL-specific internal agent concepts (not external platforms), in data-file order. */
export function getInternalAgents(): Tool[] {
  return TOOLS.filter((t) => t.type === "internal-agent");
}

/** All third-party/open-source platforms WASL is evaluating. */
export function getExternalPlatforms(): Tool[] {
  return TOOLS.filter((t) => t.type === "external-platform");
}

/** Internal agents ordered by their recommended POC build order (pocOrder ascending; undefined last). */
export function getPocRoadmap(): Tool[] {
  return getInternalAgents().sort((a, b) => {
    const ao = a.pocOrder ?? Number.MAX_SAFE_INTEGER;
    const bo = b.pocOrder ?? Number.MAX_SAFE_INTEGER;
    return ao - bo;
  });
}
