import { expect, test } from '@playwright/test'

// Smoke tests that run against a real Vercel deployment (preview or production)
// via the smoke.yml workflow, with PLAYWRIGHT_BASE_URL pointed at the
// deployment_status target_url. Unlike the local e2e suite (which runs against
// `next start`, where the full node_modules is on disk), these exercise the
// Vercel-bundled serverless runtime — the only place function file-tracing
// failures (e.g. a missing native .so) actually surface. Asserting the HTTP
// status, not just the URL, is what catches a 500.
// The two locale roots — the real pages. (`/sw.js` appeared in the crash logs
// only because the sharp failure 500'd every route; it's not implemented and
// returns 404 on a healthy deploy, so it's not a smoke target.)
const paths = ['/de', '/en']

for (const path of paths) {
  test(`${path} returns 200`, async ({ page }) => {
    const res = await page.goto(path, { waitUntil: 'commit' })
    expect(res?.status(), `${path} should not error`).toBe(200)
  })
}
