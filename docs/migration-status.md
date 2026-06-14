# Contentful → Payload migration — status

_Last updated: 2026-06-10. Branch: `feat/rebuild`._

Full plan: `~/.claude/plans/checkout-the-current-not-bright-stroustrup.md`.
Spec: `.kiro/specs/contentful-to-payload-migration/`.

## ✅ Done & verified

### Phase 1 — Payload config restructured (vortragsplanung conventions)

- Split monolithic `src/payload.config.ts` into modular `src/{db,admin,editor,localization,plugins,jobs}.ts`.
- Collections renamed to `config*` typed `const` exports: `src/collections/config{Media,Event,Time,Person,User}.ts` + `src/collections/index.ts` (all wired in).
- Field consistency fixes: rich-text field is `content` everywhere (Person was `richText`); `wolLink` non-localized; `spouse` is now **`hasMany: true`** (data has up to 4 spouses); `Time.endYear` made **optional** (6 covenant entries have no end).
- `payload-types.ts` + admin import map generate cleanly.

### Phase 2 — Database on `@payloadcms/db-postgres` + Docker

- Removed `@payloadcms/db-vercel-postgres`; added `@payloadcms/db-postgres` + `@payloadcms/ui`.
- `docker-compose.yml` → Postgres 17 on **port 5434** (`:5433` is taken by sibling `vortragsplanung`). `DATABASE_URI` in `.env`/`.env.example`. Scripts `db:up`/`db:down`. `docs/database-setup.md` written. Deleted obsolete `scripts/setup-db.js`.
- **Verified:** `pnpm db:up` + Payload boot syncs the schema and connects (container `timeline-postgres-1` currently running).

### Phase 3 — Contentful export (kept in repo)

- Official `pnpm export:contentful` ran: **4 content types, 581 entries, 62 assets, 2 locales** → `contentful-export/export.json` + downloaded asset binaries.
- Counts: person 541, event 22, time 15, bibleBook 3. Locales: `en` (Contentful default), `de` (falls back to en).

### Project now ESM

- Set `"type": "module"` (Payload CLI's loader requires it, like vortragsplanung). Converted `next.config.js` + `webpack.sharedConfig.js` to `export default`. Removed deprecated `baseUrl` from `tsconfig.json` (TS6 hard error that already broke `test:types`).

### Phase 4 — Import script — **RUN & VERIFIED** ✅

- `scripts/import-from-contentful.ts` (`pnpm migrate:contentful [--fresh]`). Type-clean + lint-clean.
- Pipeline: media upload (localized `alt`) → create time/event/person (scalars + image + `richText`→`content` via Contentful-JSON→HTML→Lexical) → resolve `spouse`/`childs`→`children`. Contentful-id→Payload-id map; `--fresh` wipes first.
- Field mapping baked in: `richText`→`content`, `childs`→`children`, default locale `en`, de overrides only when present. `bibleBook` (3) intentionally **not** migrated (no collection).
- **Result of `pnpm migrate:contentful --fresh`:** media 61 created / 1 skipped; time=15, event=22, person=541; 199 persons' relationships resolved, **0 unresolved links**; 1 embedded rich-text node skipped.
- **Spot-checked via local API:** counts match; person→image URL+alt resolve (Rahab); spouse/children resolve (Jesse→David); localized rich text correct (Joshua: en "Age: 110" / de "Alter: 110"; name "Joshua"/"Jọsua").
- **Fixes applied during the run:**
  1. `@contentful/rich-text-html-renderer` ships a rollup CJS bundle whose named exports tsx's static ESM linker can't detect → switched to a dynamic `import()` inside `main()`.
  2. `configPerson` `endBlurriness` had a wrong `max: 100` cap; data goes to 800 (years of uncertainty, Contentful only had `min:1`). Removed `max` on both blurriness fields, fixed descriptions.
  3. `name` is required+localized; entries with German `content` but no German `name` failed the `de`-locale write. The German pass now always sends `name: nameDe ?? nameEn` (display falls back to en anyway).
- **Known minor:** 1 embedded-asset-block in `time/4iGBcSU5HQj2vEcHn0Huts` German rich text dropped (inline image inside body; the entry's main `image` field is fine). 1 Contentful asset (`ZD93bixyNFgA7mMQxmB2j`) has no file/URL and is unreferenced — correctly skipped.

### Phase 5 — Frontend swap — **DONE & VERIFIED** ✅

- `src/lib/fetchTimelineData.ts` rewritten to the Payload local API (`getPayload` + `find`, minimal `select`, `depth: 0`, sorted, locale-aware). Returns plain docs serialized to the client.
- `formatTimelineData.ts` / `formatData.ts` / `@types/{Person,Time,Event,Child,Parent,Data}.d.ts` refactored off the Contentful `sys` shape to Payload `id` (stringified); new `@types/RichText.d.ts` aliases the Lexical content type.
- Rich text now renders with `RichText` from `@payloadcms/richtext-lexical/react` (custom JSX converters mapping heading/paragraph/list/quote/hr/link to the project `Typography` components).
- Sidebar detail fetch moved from Apollo `useSuspenseQuery` to a **server action** `src/lib/fetchContentData.ts` (local API); `useFetchSidebarData` is now a thin client hook. Parents resolved via reverse `children` query.
- Images use Payload media (`doc.image.url`) with `next/image`; `ContentfulLink` → `AdminLink` (links to `/admin/collections/...`).
- Foundational frontend fixes needed to render: created missing `src/i18n-config.ts`; fixed `layout.tsx`/`page.tsx` for Next 16 async `params`, the wrong messages import path, and `useLocale`-in-async-server-component; normalized all `i18n-config` imports to `@/i18n-config`.
- **Verified:** `/de` and `/en` render against the imported data (Playwright e2e), incl. a zero-violation axe a11y check on `/de`.

### Phase 6 — Algolia on Payload — **DONE & VERIFIED** ✅

- `src/collections/hooks/algolia.ts` — `afterChange`/`afterDelete` hooks on person/time/event build `{objectID, name_en, name_de, imageUrl, ...}` records and upsert/delete via algoliasearch **v5** (`saveObjects`/`deleteObjects`). No-ops when keys are absent or `DISABLE_ALGOLIA=true` (the import sets this; bulk indexing is the reindex script's job).
- `scripts/reindex-algolia.ts` (`pnpm reindex:algolia`) — atomic `replaceAllObjects` per index. **Ran:** person 541, time 15, event 22 indexed.
- Frontend search migrated `react-instantsearch-hooks@6` → `react-instantsearch@7` (`useHits` now returns `items`); `SearchProvider` uses `liteClient`; browser keys come from `NEXT_PUBLIC_ALGOLIA_*` mapped in `next.config.js` from the existing `ALGOLIA_*` env. Removed the old Contentful webhook route + `getAlgoliaObject`/`updateAlgoliaIndex`.

### Phase 7 — Cleanup + spec/docs — **DONE** ✅

- Removed deps: `contentful`, `@contentful/rich-text-react-renderer`, `@apollo/client`, `@apollo/experimental-nextjs-app-support`, `graphql-tag`, all `@graphql-codegen/*`. Kept `@contentful/rich-text-html-renderer` + `jsdom` (+ `@types/jsdom`) and `contentful-cli` for the migration/export scripts; `graphql` stays (Payload).
- Deleted Contentful/Apollo code: `src/lib/{contentfulClient,makeClient,gqlClient}.ts`, `src/utils/fetchGraphQL.ts`, `src/gql/*`, `src/@types/generated/contentful.d.ts`, `ApolloWrapper.tsx`, `Content/*.gql`, the unused `useQuery`/`useContentfulEntry` hooks, and `codegen.yml`. Dropped the `*.gql` ambient module decl.
- Updated `.kiro` spec (`tasks.md` status banner + checkboxes, `design.md` as-built note) and `readme.md`.

## ✅ Final gate — GREEN

`pnpm lint:fix` (0 errors) · `pnpm test:types` (clean) · `pnpm build` (compiles, generates pages) · `pnpm test` (types + 5 unit + 3 e2e + lint) — **all pass.**

### Non-Contentful breakage also fixed (branch was a half-finished rebuild)

Required to reach the green gate; not strictly part of the Contentful→Payload swap:

- **Config-chain `.js` imports** in `payload.config.ts` etc. broke the Turbopack build → switched to extensionless (matching `../vortragsplanung`), keeping only the generated `(payload)/layout.tsx` `importMap.js`.
- **SVGR under Turbopack**: added a `turbopack.rules` `*.svg` → `@svgr/webpack` (`exportType: 'named'`) so `import { ReactComponent }` keeps working (the webpack config is ignored by Turbopack).
- **`Theme` enum** lived in `Theme.d.ts` (no JS emitted) → moved to `Theme.ts`.
- **React 19 strictness**: `RefObject<T | null>` prop/return types; refactored `useScrollPosition`/`useMousePosition` to take a ref object and read `.current` in effects/handlers; rewrote `ClickAwayListener` to a `display:contents` wrapper (no `cloneElement`-ref) to satisfy the react-hooks "refs during render" rule.
- **Misc**: `revalidateTag` 2-arg signature; zustand `set` overload; next-intl `getRequestConfig` must return `locale`; `qs` types (`@types/qs`); Storybook v9 dropped `action` from `@storybook/addon-actions`; `no-unsafe-*` casts; removed an orphaned, unwired Header global (`payloadConfig.ts`/`revalidateHeader.ts`); a11y: `--LangSwitch-color` light value → `--greenDark` (≥4.5:1 on white).

## ⚠️ Known state / caveats

- **Nothing committed yet**; all changes are in the working tree.
- **Production rollout (Vercel/Neon) not done** — set `DATABASE_URI` to the Neon URL + the `ALGOLIA_*`/`PAYLOAD_SECRET` secrets, run the import against the prod DB (or migrate), then `pnpm reindex:algolia`. (Spec items 6.2 / 9.)
- No dedicated Payload test fixtures were added (spec 7.1–7.4); the existing unit + e2e suite is green.
- `next dev`/`next build` re-sync `tsconfig.json` (sets `jsx: react-jsx`, adds `.next/dev/types`) — expected Next behavior.
- 10 lint **warnings** remain (enum-member `no-unused-vars` false positives, `no-console` info, `set-state-in-effect`) — they don't fail the gate.
- `CONTENTFUL_CMA_TOKEN` in `.env` is only needed to re-run `pnpm export:contentful`.
