// Next.js generates types for `next/root-params` into `.next/types/root-params.d.ts`
// by walking layouts per URL path. It treats the `(payload)` route group's layout
// (which collapses to url path `/`) as an ancestor of `(frontend)/[locale]`, so it
// never detects `locale` as a root param and falls back to an untyped module.
// Runtime resolution is unaffected (verified: `/en` and `/de` resolve correctly) —
// this only restores real types in place of `any`. Remove once Next's typegen
// handles route-group-scoped root layouts correctly.
declare module 'next/root-params' {
  export function locale(): Promise<string | undefined>
}
