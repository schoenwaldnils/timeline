import { defineConfig, devices } from '@playwright/test'

// The dev server runs on port 3002 with `--experimental-https` (self-signed cert),
// so the baseURL is https and TLS errors are ignored.
const baseURL = 'https://localhost:3002'

export default defineConfig({
  testDir: './tests/e2e',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI || process.env.AGENT ? 'github' : 'html',
  use: {
    baseURL,
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'pnpm dev',
    url: baseURL,
    ignoreHTTPSErrors: true,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    env: {
      // Algolia is mocked at the network layer in tests (see tests/e2e/fixtures.ts),
      // but the lite client is constructed at module load and throws on an empty
      // appId. next.config.js derives the client-side NEXT_PUBLIC_ALGOLIA_* vars
      // from these server-side ones, so set the production names (see .env.example)
      // to dummy values to let the dev server boot.
      ALGOLIA_APPLICATION_ID: 'e2e-test-app-id',
      ALGOLIA_API_KEY: 'e2e-test-search-key',
    },
  },
})
