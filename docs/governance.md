# Governance

The WASL AI Marketplace uses a lightweight, risk-proportionate review process. **Not every project needs every stage** — a low-risk internal script needs far less scrutiny than a tool that would touch customer or banking data. Reviewers should scale the depth of review to the project's [Security Classification](security.md) and intended use.

## The pipeline

```
Suggested
   ↓
Initial AI Review
   ↓
Security Review (if required)
   ↓
Compliance / Legal Review (if required)
   ↓
Proof of Concept (POC)
   ↓
Decision
   ↓
Approved / Production / Rejected
```

### 1. Suggested

Anyone at WASL can suggest a new AI tool via the [**Suggest a New AI Tool**](../.github/ISSUE_TEMPLATE/suggest-ai-tool.yml) issue form. The issue is automatically labeled `new-ai-tool`.

### 2. Initial AI Review

A first-pass review (by the marketplace maintainers or an assigned reviewer) to confirm the tool is a legitimate, maintained project and to do a rough fit assessment against WASL's needs. Most projects should get a catalog entry at 🔵 Research status at this stage — the point of the catalog is to make evaluation visible, not to gate it.

### 3. Security Review *(required for 🟡 Medium and 🔴 High risk projects; optional but encouraged for 🟢 Low risk)*

Uses the [Security Review template](../templates/security-review-template.md). Assesses data access, authentication, hosting model, and Saudi data residency. Produces a recommended security classification and any required mitigations.

### 4. Compliance / Legal Review *(required whenever a project would touch customer, banking, employee, or otherwise regulated data)*

Compliance and Legal assess regulatory fit (including any SAMA-relevant considerations), contractual/licensing implications of the open-source license, and data handling obligations. **No project may be marked as compliant with any regulatory framework without this step being formally completed and recorded.**

### 5. Proof of Concept (POC)

A time-boxed pilot with a defined group of users, using the [POC Review template](../templates/poc-review-template.md). Status moves to 🟡 Pilot during this stage. POCs should default to synthetic, public, or clearly non-sensitive data unless a Security + Compliance review has explicitly approved otherwise.

### 6. Decision

Based on the reviews and POC results, the project moves to one of:

- ✅ **Approved** — for specific, defined use cases only
- 🟢 **Production** — actively deployed with an owner and support path
- 🔴 **Rejected** — not approved, with reasons documented on the project page

Projects already in use that are later superseded or found unsuitable move to ⚫ **Deprecated**.

## Proportionality

| Project risk | Typical path |
|---|---|
| 🟢 Low Risk, small internal utility | Suggested → Initial AI Review → (optional POC) → Decision |
| 🟡 Medium Risk | Suggested → Initial AI Review → Security Review → POC → Decision |
| 🔴 High Risk (customer/banking/financial/personal data) | Suggested → Initial AI Review → Security Review → Compliance/Legal Review → POC → Decision |

Reviewers may add extra scrutiny at their discretion; this table is a floor, not a ceiling.

## Who approves what

- **Catalog entries at Research status:** any marketplace maintainer, after confirming the suggestion is legitimate.
- **Security Review sign-off:** a designated security reviewer (see project page "Owner / Reviewer").
- **Compliance/Legal sign-off:** Compliance and/or Legal, as applicable to the data involved.
- **Final Approved/Production/Rejected decision:** the marketplace governance owner(s), informed by the above reviews.

Catalog changes (new projects, status updates, documentation fixes) are made via Pull Request so changes are visible and reviewable — see the [Contribution Guide](contribution-guide.md).

## Internal WASL Agents and the POC roadmap (v1.1)

Since v1.1, the catalog also includes **internal WASL Agent concepts** — WASL-specific agent ideas (e.g. WASL Regulatory Copilot, WASL Data Analyst) proposed to be built on WASL's shared agent platform (Replit + n8n + Azure OpenAI + Azure AI Search), rather than separate external GitHub projects. They move through the exact same pipeline above — every one of the ten added in v1.1 enters at 🔵 Research status.

Each internal agent's catalog entry carries a `pocOrder` field: the marketplace maintainers' recommended build order across all ten agents, from 1 (build first) to 10. This reflects an initial assessment of business value and readiness, not a committed schedule or leadership-approved roadmap — final prioritization is a PMO/leadership decision. The current recommended order:

1. WASL Product & BA Copilot
2. WASL Regulatory Copilot
3. WASL Data Analyst
4. WASL Executive PMO Agent
5. WASL Banking Ops Agent
6. WASL Finance Ops Agent
7. WASL HR Copilot
8. WASL Growth Agent
9. WASL Dev Review Agent
10. WASL BD Intelligence Agent

This order is also rendered as a roadmap section on the marketplace homepage. See [`/web/docs/architecture.md`](../web/docs/architecture.md) for the shared-platform architecture these agents are proposed to run on.
