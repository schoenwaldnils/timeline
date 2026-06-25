# Timeline

![](https://api.checklyhq.com/v1/badges/checks/f290fe55-fa43-4be3-9b62-03ed2e5b67bf?style=flat\&theme=default)

This project visualizes lifespans and timespans described in the bible.

Built with [Payload CMS](https://payloadcms.com/) (content + admin), [Next.js](https://nextjs.org/)
(framework, App Router, `en`/`de` via [next-intl](https://next-intl.dev/)) and
[Algolia](https://www.algolia.com/) (search). Content lives in PostgreSQL.

## Architecture

Payload CMS is embedded in the Next.js App Router app — one process, one Postgres
DB. The root config `src/payload.config.ts` (alias `@payload-config`) composes the
modular pieces under `src/`: `collections`, `db.ts`, `jobs.ts`, `localization.ts`,
`admin.ts`, `editor.ts`, `plugins.ts`.

- **Route groups** (`src/app/`): `(frontend)` serves the public timeline under
  `[locale]`; `(payload)` serves the admin UI and Payload's REST/GraphQL API.
- **Data flow** is server-side: `(frontend)/[locale]/page.tsx` →
  `fetchTimelineData(locale)` in `src/lib` (Payload local API) → `<Page>`. The
  timeline does no client-side data fetching.
- **Collections**: `media`, `event`, `time`, `person`, `user`. `event`/`time`/`person`
  each relate an `image` to `media`.
- **Two i18n layers**: next-intl for the public site (`en`/`de`, `src/messages/*.json`,
  `src/i18n-config`, `src/utils/i18n.ts`) and Payload's own `localization` for
  localized content fields. They are independent.
- **Search**: Algolia is wired through collection `afterChange`/`afterDelete` hooks
  (`src/collections/hooks/algolia.ts`), not a Payload plugin (`src/plugins.ts` is
  empty). Records are bilingual (English doc + German `name`).
- **DB**: `src/db.ts` normalizes the connection string's `sslmode` before the
  postgres adapter. Schema auto-syncs in dev; production runs `payload migrate` in
  the Vercel build.
- **Styling**: CSS Modules (`*.module.css`) + `postcss-custom-media`. The
  `@emotion/*` packages are legacy and unused in `src`.

## Scripts

```bash
pnpm dev                       # Next.js + Payload admin, HTTPS on :3002
pnpm build                     # next build
pnpm lint-fix                  # eslint --fix + remark (run before building)
pnpm test                      # test:types + test:int (vitest) + test:e2e + lint
pnpm generate:payload-types    # regenerate src/payload-types.ts after schema changes
pnpm generate:importmap        # regenerate the Payload admin import map
pnpm migrate:create            # create a DB migration from current schema
pnpm reindex:algolia           # rebuild all Algolia indices from the DB
```

Run a single test:

```bash
pnpm exec vitest run path/to/file.test.ts -t "test name"
pnpm exec playwright test tests/e2e/home.spec.ts -g "renders"
```

## Local development

1. **Start the database** (Docker Postgres on port `5434`):

   ```bash
   pnpm db:up
   ```

2. **Configure env** — copy `.env.example` to `.env` and fill in the secrets
   (`PAYLOAD_SECRET`, the `ALGOLIA_*` keys, etc.). `POSTGRES_URL` already points at the
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

## Testing

```bash
pnpm test          # test:types + test:int (vitest) + test:e2e (playwright) + lint
pnpm test:e2e      # Playwright only
```

Locally, `test:e2e` runs against the dev server (`pnpm dev`, HTTPS). In CI
(`.github/workflows/test.yml`) it runs against `pnpm start` (`next start`).

A separate **post-deploy smoke gate** (`.github/workflows/smoke.yml`) runs on
Vercel's `deployment_status` for every preview and production deploy: it points
Playwright at the live deployment (`PLAYWRIGHT_BASE_URL` → `tests/smoke/`) and
asserts `/de` and `/en` return HTTP 200. This catches failures that only appear
in Vercel's bundled serverless runtime (e.g. function file-tracing dropping a
native `.so`) — which `next start` cannot reproduce, since it has the full
`node_modules` on disk.

> **Do not bump `sharp` past Next's range.** Next.js pins `sharp@^0.34.5` as an
> optional dependency. Installing a newer `sharp` adds a second copy whose
> native libvips isn't traced into the Vercel function bundle, 500-ing every
> page. Keep the direct `sharp` dependency within Next's range so the tree
> dedupes to one copy.

## Content migration (Contentful → Payload)

The one-time migration from the previous Contentful backend is captured in
`docs/migration-status.md`. The flow is:

```bash
pnpm export:contentful     # official Contentful CLI export → contentful-export/
pnpm migrate:contentful --fresh   # import export.json into Payload (skips Algolia)
pnpm reindex:algolia       # populate the search indices
```

## Production

Deployed on Vercel + Neon. The DB connection (`POSTGRES_URL`, pooled) comes from the
Vercel/Neon integration automatically; add the app secrets (`PAYLOAD_SECRET`, `CRON_SECRET`,
`PREVIEW_SECRET`, the three `ALGOLIA_*` keys) in the Vercel project env. The Vercel build
command runs `payload migrate` (against the unpooled URL) before `next build`. See
`docs/database-setup.md` for the migration workflow.

The post-deploy smoke gate (see [Testing](#testing)) needs no secret while
preview deployments are public. If you enable Vercel Deployment Protection on
previews, add a `VERCEL_AUTOMATION_BYPASS_SECRET` repo secret (Vercel → Project
→ Deployment Protection → Protection Bypass for Automation) so the gate can
reach protected URLs. To block bad builds before they merge, add the `smoke`
job as a required status check on `main`.
