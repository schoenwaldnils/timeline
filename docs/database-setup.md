# Database setup

The Payload CMS backend uses **PostgreSQL** via `@payloadcms/db-postgres`.

## Local development (Docker)

A local Postgres is provided through `docker-compose.yml`.

```bash
pnpm db:up      # start Postgres (postgres:17-alpine) on localhost:5434
pnpm db:down    # stop it
```

Set the connection string in `.env`:

```
POSTGRES_URL=postgres://postgres:postgres@127.0.0.1:5434/timeline
```

> The adapter reads `POSTGRES_URL` (`src/db.ts`) — the same var the Vercel/Neon
> integration already injects in production, so no extra DB var is added on Vercel.

> Port **5434** is used (not the Payload default 5432, and not 5433 which the
> sibling `vortragsplanung` project already binds) to avoid collisions.

On first boot in development, Payload syncs the schema automatically
(`push` mode) — no manual migration is needed locally. Start the app with
`pnpm dev` and create the first admin user at `/admin`.

## Production (Neon)

The app reads **`POSTGRES_URL`**, which the Vercel/Neon integration already
provides (pooled) — so **no DB env var needs adding on Vercel**. The same
`@payloadcms/db-postgres` adapter connects to Neon over that plain connection
string; no Vercel-specific adapter is required.

For production, generate and run Payload migrations rather than relying on
`push` (which is auto-disabled when `NODE_ENV=production`).

## Migration workflow

Migration files live in `src/migrations/`. The baseline
(`20260613_000214_initial`) captures the full schema as first deployed; prod was
seeded from a `pg_dump` of the local DB, so that baseline is recorded as already
applied in the `payload_migrations` ledger (it never re-runs against prod).

For every schema change after that:

```bash
pnpm migrate:create <name>   # generate src/migrations/<ts>_<name>.ts — commit it
pnpm migrate:status          # inspect which migrations have run
pnpm migrate                 # apply pending migrations
```

The deploy applies pending migrations automatically (Vercel build command runs
`payload migrate` before `next build`).

> **Pooled vs unpooled:** runtime uses the Neon **pooled** `POSTGRES_URL`. The
> Vercel build command runs `payload migrate` with `POSTGRES_URL` overridden to
> `POSTGRES_URL_NON_POOLING`, and `pg_dump`/`pg_restore` likewise use the
> unpooled/direct URL — pgBouncer transaction pooling breaks DDL transactions and
> large restores.
