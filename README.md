# SDG Centre + Carbon AI Platform

Prototype of a commercial SaaS operating system for SDG Centre management, LMS, DMS, Knowledge Centre, LIMS, PMS, HRM, ESG, Carbon AI and BI dashboards.

## Stack
- Next.js, React, TypeScript, Tailwind CSS
- NestJS-ready modular backend architecture
- PostgreSQL, Prisma ORM, Redis
- S3-compatible storage, Meilisearch/Elasticsearch
- Docker Compose and GitHub Actions

## Run
```bash
npm install
npm run dev
```

## Scope covered in this scaffold
- Modern landing page with mission, strategy, modules, roles, SDGs, labs, ESG and Carbon AI.
- Knowledge Centre structure for SDG Centre regulatory documents.
- Initial Prisma schema for tenants, users, documents, courses, labs, projects, tasks and audit logs.
- Docker Compose infrastructure for PostgreSQL, Redis, Meilisearch and MinIO.
- CI workflow for type-checking and production build.
