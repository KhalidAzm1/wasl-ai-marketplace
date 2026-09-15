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
  | "Research"
  | "PMO / Management"
  | "Banking / Operations"
  | "Business Development / Partnerships";

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
  | "All Employees"
  | "Management"
  | "PMO"
  | "Project Managers"
  | "Banking Operations"
  | "Operations"
  | "QA"
  | "Engineering"
  | "Business Development"
  | "Partnerships"
  | "Sales"
  | "Accounting"
  | "Legal"
  | "Risk"
  | "Content Team"
  | "Growth";

/**
 * Whether a catalog entry is a third-party/open-source platform WASL is
 * evaluating (external-platform — e.g. Dify, AnythingLLM) or a WASL-specific
 * agent concept to be built on WASL's own shared agent platform
 * (internal-agent — e.g. the department Copilots). Purely a display/filter
 * distinction; both still carry the full Research → Production governance
 * fields above.
 */
export type ToolType = "external-platform" | "internal-agent";

/** Build priority as assessed by the marketplace maintainers — not a commitment or schedule. */
export type Priority = "Low" | "Medium" | "High" | "Very High";

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

  /**
   * external-platform: a third-party/open-source tool WASL is evaluating (Dify, AnythingLLM).
   * internal-agent: a WASL-specific agent concept proposed to be built on WASL's shared
   * agent platform (Replit + n8n + Azure OpenAI + Azure AI Search). Defaults to
   * "external-platform" for older entries when absent — always set explicitly for new entries.
   */
  type: ToolType;

  /** Initial build-priority assessment by marketplace maintainers, pending formal roadmap approval. */
  priority?: Priority;

  /**
   * Whether this tool/agent's proposed actions require a human to approve them before
   * anything irreversible happens (financial transactions, sending external messages,
   * writes to systems of record, etc). Internal agents handling money, HR, compliance
   * or banking-ops data should generally set this true.
   */
  humanApprovalRequired?: boolean;

  /**
   * Recommended build order across all internal-agent concepts (1 = build first), per the
   * marketplace maintainers' POC roadmap. Only meaningful for type: "internal-agent".
   * Not a commitment or schedule — an initial recommendation pending PMO/leadership sign-off.
   */
  pocOrder?: number;

  /**
   * Free-text list of proposed capabilities shown on the detail page as a checklist —
   * distinct from `useCases`, which are example scenarios/flows rather than discrete features.
   */
  capabilities?: string[];

  /** Short "Input → step → step → Output" style description of a typical run, shown on the detail page. */
  exampleWorkflow?: string;

  /**
   * Which layer of the shared agent platform is responsible for what, specific to this
   * tool/agent. Optional — only set for internal-agent entries that follow the shared
   * Employee → Replit → n8n → Agent Logic → Azure OpenAI/Azure AI Search → Output architecture.
   */
  suggestedArchitecture?: {
    replit?: string;
    n8n?: string;
    azureOpenAI?: string;
    azureAISearch?: string;
  };
}
