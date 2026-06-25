# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Read first

- **`README.md`** — architecture overview, scripts/commands, local dev setup, env
  vars, the Algolia and Contentful→Payload migration workflows, testing, and
  deployment. Read it before acting; setup and architecture docs live there, not here.
- [`~/.claude/docs/component-based-development.md`](~/.claude/docs/component-based-development.md) — UI/component conventions for this React/Next.js codebase.
- [`~/.claude/docs/linting-and-formatting.md`](~/.claude/docs/linting-and-formatting.md) — ESLint / Prettier / remark / a11y tooling.

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
