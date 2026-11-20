# AGENTS.md

Guidance for coding agents working in this repository.

## Read first

- **`README.md`** — architecture overview, scripts/commands, local dev setup, env
  vars, the Algolia and Contentful→Payload migration workflows, testing, and
  deployment. Read it before acting; setup and architecture docs live there, not here.
- Follow the repository's UI/component conventions and its ESLint, Prettier, remark, and accessibility tooling.

## Behavioural rules

- **After any schema/field change**, run `pnpm generate:payload-types` (and
  `pnpm generate:importmap` if admin components changed) so `src/payload-types.ts`
  stays in sync — much of the code imports its types from there.
- **Do not bump `sharp` past Next's `^0.34.5` range.** A newer `sharp` adds a
  second copy whose native libvips isn't traced into the Vercel function bundle,
  500-ing every page in production. Keep the tree deduped to Next's version.
- **Styling is CSS Modules** (`*.module.css`); the `@emotion/*` packages are
  legacy. Do not add new emotion styles.
- **Use the path aliases** (`@/*` → `src/*`, `@payload-config`, `@/payload-types`,
  `@/i18n-config`) instead of relative paths.
- **The two i18n layers are independent** — next-intl (public site, `src/messages/*.json`)
  and Payload `localization` (content fields). Changing one does not change the other.
- **Algolia indexing is in collection hooks** (`src/collections/hooks/algolia.ts`),
  not a plugin; it no-ops without `ALGOLIA_*` env or when `DISABLE_ALGOLIA=true`.
  After bulk DB changes, run `pnpm reindex:algolia` rather than relying on the hooks.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
