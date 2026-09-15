/**
 * Category, department, and status taxonomies. Centralized so filters and
 * badges stay in sync as the catalog grows — never hard-code this list
 * inside a component.
 */

import type { Category, Department, ToolStatus, SecurityLevel } from "@/types/tool";

export const CATEGORIES: Category[] = [
  "AI Assistants",
  "Automation",
  "Knowledge & RAG",
  "Meetings",
  "Product & Business",
  "Developers",
  "Data & Analytics",
  "Marketing",
  "Finance",
  "HR",
  "Compliance & Legal",
  "Cybersecurity",
  "Research",
];

export const DEPARTMENTS: Department[] = [
  "All Employees",
  "AI Assistants",
  "Product & Business",
  "Developers",
  "Data & Analytics",
  "Marketing",
  "Finance",
  "HR",
  "Compliance & Legal",
  "Cybersecurity",
  "Technology",
];

export const STATUS_FILTERS: ToolStatus[] = ["research", "pilot", "approved", "production"];

export const STATUS_META: Record<
  ToolStatus,
  { label: string; emoji: string; textClass: string; bgClass: string; dotClass: string }
> = {
  research: {
    label: "Research",
    emoji: "🔵",
    textClass: "text-status-research",
    bgClass: "bg-status-research/10",
    dotClass: "bg-status-research",
  },
  pilot: {
    label: "Pilot",
    emoji: "🟡",
    textClass: "text-status-pilot",
    bgClass: "bg-status-pilot/10",
    dotClass: "bg-status-pilot",
  },
  approved: {
    label: "Approved",
    emoji: "✅",
    textClass: "text-status-approved",
    bgClass: "bg-status-approved/10",
    dotClass: "bg-status-approved",
  },
  production: {
    label: "Production",
    emoji: "🟢",
    textClass: "text-status-production",
    bgClass: "bg-status-production/10",
    dotClass: "bg-status-production",
  },
  rejected: {
    label: "Rejected",
    emoji: "🔴",
    textClass: "text-status-rejected",
    bgClass: "bg-status-rejected/10",
    dotClass: "bg-status-rejected",
  },
  deprecated: {
    label: "Deprecated",
    emoji: "⚫",
    textClass: "text-status-deprecated",
    bgClass: "bg-status-deprecated/10",
    dotClass: "bg-status-deprecated",
  },
};

export const SECURITY_META: Record<
  SecurityLevel,
  { label: string; emoji: string; textClass: string; bgClass: string }
> = {
  low: { label: "Low Risk", emoji: "🟢", textClass: "text-risk-low", bgClass: "bg-risk-low/10" },
  medium: { label: "Medium Risk", emoji: "🟡", textClass: "text-risk-medium", bgClass: "bg-risk-medium/10" },
  high: { label: "High Risk", emoji: "🔴", textClass: "text-risk-high", bgClass: "bg-risk-high/10" },
};

export const DEPLOYMENT_LABEL: Record<string, string> = {
  "self-hosted": "Self-Hosted",
  cloud: "Cloud",
  hybrid: "Hybrid",
};
