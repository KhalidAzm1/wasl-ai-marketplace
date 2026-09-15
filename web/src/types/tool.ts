/**
 * WASL AI Marketplace — Tool data model.
 *
 * This is the single shape every catalog entry must conform to. Keep it stable
 * as the catalog grows to dozens or hundreds of tools: prefer adding optional
 * fields over changing existing ones, since the whole site renders from this.
 *
 * Source of truth: /web/src/data/tools.json (mirrors the full write-up that
 * lives in the GitHub repo under /projects/<slug>/README.md — GitHub is the
 * governance record; this JSON is what the app renders).
 */

export type ToolStatus =
  | "research"
  | "pilot"
  | "approved"
  | "production"
  | "rejected"
  | "deprecated";

export type SecurityLevel = "low" | "medium" | "high";

export type DeploymentModel = "self-hosted" | "cloud" | "hybrid";

export type Category =
  | "AI Assistants"
  | "Automation"
  | "Knowledge & RAG"
  | "Meetings"
  | "Product & Business"
  | "Developers"
  | "Data & Analytics"
  | "Marketing"
  | "Finance"
  | "HR"
  | "Compliance & Legal"
  | "Cybersecurity"
  | "Research";

export type Department =
  | "AI Assistants"
  | "Product & Business"
  | "Developers"
  | "Data & Analytics"
  | "Marketing"
  | "Finance"
  | "HR"
  | "Compliance & Legal"
  | "Cybersecurity"
  | "Technology"
  | "All Employees";

export interface Tool {
  /** URL-safe unique identifier, e.g. "dify" */
  id: string;
  name: string;
  /** Short, card-length description (~1-2 sentences). */
  description: string;
  /** One-line tagline shown under the title on the detail page. */
  tagline: string;
  category: Category;
  secondaryCategory?: Category;
  status: ToolStatus;
  securityLevel: SecurityLevel;
  /** Free-text audience shown on the card, e.g. "Developers, Business Analysts" */
  targetUsers: string;
  /** Departments that could benefit — drives the department filter. */
  departments: Department[];
  /** Proposed/illustrative use cases — must be clearly non-deployed unless status is production. */
  useCases: string[];
  /** Proposed or actual integrations. */
  integrations: string[];
  deployment: DeploymentModel;
  deploymentNotes: string;
  /** Upstream/original open-source repository, if any. */
  repository?: string;
  /** Product website, if any. */
  website?: string;
  license?: string;
  lastReviewed: string; // ISO date
  owner: string;

  // Narrative content for the detail page
  problem: string;
  whatItDoes: string;
  whyEvaluating: string;
  architecture: string;
  dataConsiderations: string;
  securityNotes: string;
  complianceNotes: string;
  dataResidencyNotes: string;
  howToUse: string;
  pocStatus: string;

  /** Path to the full governance write-up in the GitHub repo (relative to repo root). */
  docsPath: string;

  /** Card visuals */
  initials: string;
  color: string;

  /** true once a real POC has produced evidence-backed content (keeps proposed vs. deployed language honest) */
  isDeployed: boolean;
}
