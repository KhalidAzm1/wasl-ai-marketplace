# Security Review — [Project Name]

> Use this template when a project moves into **Security Review** as part of the governance process described in [`/docs/governance.md`](../docs/governance.md). Attach the completed review to the relevant GitHub Issue and link it from the project's page under "Review History".

| Field | Value |
|---|---|
| **Project** | |
| **Reviewer(s)** | |
| **Review Date** | |
| **Version / Commit Reviewed** | |
| **Proposed Security Classification** | 🟢 Low / 🟡 Medium / 🔴 High |

## 1. Data Access Scope

What data would this project realistically touch in a WASL deployment (categories, sensitivity, volume)?

## 2. Authentication & Authorization

How does the tool authenticate users and enforce access control? Does it support SSO/Azure AD integration?

## 3. Data Storage & Retention

Where is data stored (self-hosted vs. vendor cloud)? What is the retention policy? Is data encrypted at rest and in transit?

## 4. Third-Party / External Calls

Does the tool call external APIs or third-party model providers? Which ones, and what data leaves WASL's control as a result?

## 5. Known Vulnerabilities / CVEs

Any known CVEs or security advisories for this project or its dependencies? Date checked.

## 6. Hosting Model Assessment

Self-hosted (WASL-controlled infrastructure) vs. vendor-hosted. Network exposure, required firewall rules, secrets management approach.

## 7. Saudi Data Residency

Can this be deployed such that data stays within Saudi Arabia (e.g., Azure KSA regions)? Has this been verified technically, not just assumed?

## 8. Recommended Mitigations

List any mitigations required before approval (e.g. network isolation, DLP rules, restricted user groups, logging/audit requirements).

## 9. Recommendation

☐ Approve for Pilot with mitigations
☐ Approve for Production
☐ Require further review (Compliance/Legal)
☐ Reject

## 10. Sign-off

| Role | Name | Date |
|---|---|---|
| Security Reviewer | | |
| Approving Manager | | |

> This review does not constitute a compliance or legal approval. See `/templates/poc-review-template.md` and `/docs/governance.md` for how this fits into the overall approval path.
