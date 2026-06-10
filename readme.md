# Timeline

![](https://api.checklyhq.com/v1/badges/checks/f290fe55-fa43-4be3-9b62-03ed2e5b67bf?style=flat\&theme=default)

This project visualizes lifespans and timespans described in the bible.

Built with [Payload CMS](https://payloadcms.com/) (content + admin), [Next.js](https://nextjs.org/)
(framework, App Router, `en`/`de` via [next-intl](https://next-intl.dev/)) and
[Algolia](https://www.algolia.com/) (search). Content lives in PostgreSQL.

## Local development

1. **Start the database** (Docker Postgres on port `5434`):

   ```bash
   pnpm db:up
   ```

2. **Configure env** — copy `.env.example` to `.env` and fill in the secrets
   (`PAYLOAD_SECRET`, the `ALGOLIA_*` keys, etc.). `DATABASE_URI` already points at the
   local Docker Postgres.

3. **Start the dev server** (Next.js + Payload admin, HTTPS on port `3002`):

   ```bash
   pnpm dev
   ```

4. **Open the admin** at `https://localhost:3002/admin` and create the first admin user.
   The timeline frontend is at `https://localhost:3002/en` and `/de`.

Payload auto-syncs the database schema on boot in dev.

## Search (Algolia)

Person/time/event records are indexed into Algolia via collection `afterChange`/`afterDelete`
hooks. To rebuild every index from the current database content:

```bash
pnpm reindex:algolia
```

Indexing requires `ALGOLIA_APPLICATION_ID` and `ALGOLIA_ADMIN_API_KEY`; without them the hooks
no-op. The browser search client reads the public app id + search key (`ALGOLIA_API_KEY`), which
`next.config.js` exposes as `NEXT_PUBLIC_ALGOLIA_*`.

## Content migration (Contentful → Payload)

The one-time migration from the previous Contentful backend is captured in
`docs/migration-status.md`. The flow is:

```bash
pnpm export:contentful     # official Contentful CLI export → contentful-export/
pnpm migrate:contentful --fresh   # import export.json into Payload (skips Algolia)
pnpm reindex:algolia       # populate the search indices
```

## Production

Set `DATABASE_URI` to the Neon pooled connection string and the `ALGOLIA_*` / `PAYLOAD_SECRET`
secrets in the deployment environment. Run `pnpm build` then `pnpm start`.
