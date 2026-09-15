# Security Classification & Data Handling

Every project in the catalog is tagged with one of three security classifications. This tag reflects **the sensitivity of data the project would need to access to be useful**, not the quality of the project's own security engineering (that is assessed separately in a formal [Security Review](../templates/security-review-template.md) when a project moves past Research).

## Classification levels

| Level | Meaning |
|---|---|
| 🟢 **Low Risk** | No sensitive company data required. The tool can be evaluated or used with public, synthetic, or non-sensitive data only. |
| 🟡 **Medium Risk** | May access internal or operational information (e.g. internal documentation, non-customer internal tickets, general business content) that is not public but is not classified as sensitive, customer, financial, or personal data. |
| 🔴 **High Risk** | May process sensitive, customer, banking, financial, personal, or otherwise regulated information. |

## The one rule that matters most

> **No AI project may receive sensitive WASL, banking, customer, employee, or regulated data until appropriate security, legal, and compliance approval is completed.**

This applies regardless of a project's Status. A project can be 🟢 Research-status and still be rated 🔴 High Risk if its *intended* future use case would touch sensitive data — the classification is about what the project *would* need, so reviewers and employees know what level of scrutiny to expect before that data is ever connected.

## On compliance claims

- **Do not claim any project is SAMA compliant, ISO-certified for WASL's use, or "secure" in an absolute sense unless it has been formally reviewed and approved by Compliance/Legal**, with that approval documented in the project's Review History.
- Marketing claims made by an upstream open-source project (e.g. "enterprise-grade security") are not a substitute for WASL's own review and carry no weight in this catalog.
- Absence of a documented security issue is not the same as an approval. If a project's page does not mention a completed Security Review, assume none has happened.

## Reporting a security concern

If you believe a project in this catalog poses an undisclosed security risk, or that a project's stated classification is wrong, do **not** post technical details of a live vulnerability in a public/internal issue. Instead:

1. Open an issue using the **"Report a Problem"** template and mark it security-sensitive, or
2. Contact the project's listed Owner/Reviewer directly, or
3. Route through WASL's existing internal security incident process if one applies.

See [`governance.md`](governance.md) for how Security Review fits into the overall approval pipeline, and [`/templates/security-review-template.md`](../templates/security-review-template.md) for the review format itself.
