import { defineConfig, devices } from '@playwright/test'

const isCI = !!process.env.CI

// When PLAYWRIGHT_BASE_URL is set (smoke.yml, on Vercel `deployment_status`) the
// suite runs against a real deployment instead of a local server: it points at
// the `tests/smoke` specs, hits the deployment URL directly (no webServer), and
// passes the Vercel deployment-protection bypass header when the secret exists.
// This is the only way to exercise Vercel's bundled serverless runtime, where
// function file-tracing failures (e.g. a missing native .so) surface.
const remoteBaseURL = process.env.PLAYWRIGHT_BASE_URL
const bypassSecret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET

// In CI the suite runs against a production server (`next start`, plain http) so it
// exercises the build that ships — and with NODE_ENV=production Payload's schema
// `push` is off, keeping the run read-only. Locally it runs against the dev server
// (`next dev --experimental-https`, self-signed cert → https, TLS errors ignored).
const baseURL = remoteBaseURL ?? (isCI ? 'http://localhost:3002' : 'https://localhost:3002')

export default defineConfig({
  testDir: remoteBaseURL ? './tests/smoke' : './tests/e2e',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI || process.env.AGENT ? 'github' : 'html',
  use: {
    baseURL,
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    extraHTTPHeaders: bypassSecret ? { 'x-vercel-protection-bypass': bypassSecret } : undefined,
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  // Skip the local web server when targeting a remote deployment.
  webServer: remoteBaseURL
    ? undefined
    : {
        // CI reuses the `.next` produced by the earlier build step; locally we spin up
        // the dev server (and reuse one if it's already running).
        command: isCI ? 'pnpm start' : 'pnpm dev',
        url: baseURL,
        ignoreHTTPSErrors: true,
        reuseExistingServer: !isCI,
        timeout: 120_000,
        env: {
          // Algolia is mocked at the network layer in tests (see tests/e2e/fixtures.ts),
          // but the lite client is constructed at module load and throws on an empty
          // appId. next.config.js derives the client-side NEXT_PUBLIC_ALGOLIA_* vars
          // from these server-side ones, so set the production names (see .env.example)
          // to dummy values to let the dev server boot. In CI these are baked in at
          // build time instead (see .github/workflows/test.yml).
          ALGOLIA_APPLICATION_ID: 'e2e-test-app-id',
          ALGOLIA_API_KEY: 'e2e-test-search-key',
        },
      },
})
