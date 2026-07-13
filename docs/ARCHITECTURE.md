# SDG Centre + Carbon AI Platform Architecture

## Frontend
Next.js App Router, React, TypeScript, Tailwind CSS and shadcn/ui compose a modular interface with public pages, dashboards, document readers, LMS, LIMS, PMS, HRM, ESG and Carbon AI workspaces.

## Backend
NestJS services are split by bounded contexts: Auth, Identity, Documents, LMS, Labs, Projects, ESG, Carbon AI, Search, Files, Notifications, Audit and Reporting.

## Data and infrastructure
PostgreSQL is the system of record through Prisma ORM. Redis handles sessions, queues and rate limiting. S3-compatible storage keeps files and exports. Meilisearch or Elasticsearch powers full-text search. Docker Compose runs app, API, database, cache, object storage and search locally.

## Security
Authentication supports JWT, Google OAuth, Microsoft OAuth and two-factor authentication. Authorization uses RBAC permissions attached to roles and tenant scopes. Every critical action is written to Audit Log.

## Document lifecycle
Documents are stored as versioned HTML pages with workflow states: draft, review, approved, archived. Users can comment, bookmark, print, export to PDF/Word and navigate via table of contents, breadcrumbs, previous and next links.
