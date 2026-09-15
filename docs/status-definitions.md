# Status Definitions

Every project in the WASL AI Marketplace carries exactly one status at a time. Status reflects **how far a project has progressed through WASL's evaluation and adoption process** — it is not a judgment of the project's quality in the open-source community, only of where it stands for internal WASL use.

| Status | Meaning |
|---|---|
| 🔵 **Research** | The project is being evaluated. No WASL data, pilot users, or production usage exists yet. This is the default status for every newly added project. |
| 🟡 **Pilot** | The project is currently being tested with a limited group of employees under defined conditions (see the project's POC review). Not yet approved for general use. |
| ✅ **Approved** | The project has completed review and is approved for specific, defined WASL use cases. Usage outside those defined use cases requires a new review. |
| 🟢 **Production** | The project is actively deployed and used at WASL for its approved use case(s), with an assigned owner and support path. |
| 🔴 **Rejected** | The project was formally reviewed and is **not** approved for WASL use. The project page should state why, so the same ground isn't re-covered unnecessarily. |
| ⚫ **Deprecated** | The project was previously used at WASL (Approved or Production) but is no longer recommended — e.g. superseded by a better option, end-of-life upstream, or a new risk was identified. |

## Rules

1. **Default status for new entries is always 🔵 Research.** A project may only move to a different status through the process described in [`governance.md`](governance.md).
2. **Status changes must be reflected in the project's "Review History" table**, with date, reviewer, and reason.
3. **No project may claim 🟢 Production or ✅ Approved status without a documented review.** If you see a status that looks wrong or unsupported, open an issue using the "Report a Problem" template.
4. Status is independent of [Security Classification](security.md) — a project can be 🔵 Research and 🔴 High Risk at the same time; the classification tells you about risk, the status tells you about adoption progress.

## Where statuses appear

Status is shown:
- On every project's page (`/projects/<project>/README.md`) in the summary table.
- As a badge on each project card on the [marketplace website](../site/index.html).
- In the catalog index in the main [`README.md`](../README.md).
