# Kanban Workflow and Testing States

This document explains the lifecycle of a task (ticket) inside our GitHub Projects Kanban board and the testing logic associated with each column.

## 1. To Do
- **What happens here?**: The ticket is created with the business requirements (e.g., "Create a Membership form"). No coding has started.
- **Tests**: None.
- **Who acts?**: Project Manager or Lead Developer prioritizes the task.

## 2. In Progress (Local Branch)
- **What happens here?**: A developer assigns the ticket to themselves and creates a local branch (e.g., `feature/membership-form`) based on `dev`. Code is being written.
- **Tests**: The developer writes **Unit Tests** and **Component Tests** locally while programming.
- **Who acts?**: The Developer.

## 3. In Dev (Pull Request to `dev`)
- **What happens here?**: The developer opens a Pull Request (PR) from their feature branch to the `dev` branch.
- **Tests**: **GitHub Actions** automatically runs Linting, Unit Tests, and Component Tests. 
- **Rule**: If tests fail, the PR is blocked, and the ticket goes back to "In Progress". If they pass, the PR is merged into `dev`.
- **Who acts?**: GitHub Actions (Automatic) and Code Reviewers.

## 4. In QA (Pull Request to `qa`)
- **What happens here?**: The `dev` branch is merged into `qa`. Vercel automatically deploys a temporary URL for this environment.
- **Tests**: 
  - **Automated**: End-to-End (E2E) tests run in GitHub Actions.
  - **Human**: Manual Functional and Exploratory testing by a QA Tester to "break" the app.
- **Who acts?**: QA Testers or Developers doing manual testing.

## 5. In Staging (Pull Request to `staging`)
- **What happens here?**: The `qa` branch is merged into `staging`. This is a production replica.
- **Tests**: **User Acceptance Testing (UAT)**. The Pastor or Ministry Leaders test the feature to ensure it meets their real-world needs.
- **Who acts?**: End Users / Stakeholders.

## 6. Done (Merged to `main`)
- **What happens here?**: The code is merged into `main` and deployed to the live production server. The ticket is officially closed.
- **Tests**: Final sanity check in production.
- **Who acts?**: The System (Live).
