import { expect, test as base } from '@playwright/test'

// Minimal valid Algolia multi-query response. react-instantsearch fires a search
// against the `person` index on mount, so every page that renders the search UI
// hits Algolia. Returning an empty-but-well-formed result keeps e2e runs
// deterministic and free of any live index or real credentials.
const algoliaResponse = {
  results: [
    {
      hits: [],
      nbHits: 0,
      page: 0,
      nbPages: 0,
      hitsPerPage: 20,
      exhaustiveNbHits: true,
      query: '',
      params: '',
      index: 'person',
      processingTimeMS: 1,
    },
  ],
}

// Matches Algolia search/DSN hosts and the algolianet.com retry hosts.
const algoliaHosts = /algolia(net)?\.(com|net)/

export const test = base.extend({
  // The fixture callback is named `run` (not Playwright's conventional `use`) so
  // the react-hooks/rules-of-hooks lint rule doesn't mistake it for React's `use`.
  page: async ({ page }, run) => {
    await page.route(algoliaHosts, (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(algoliaResponse),
      }),
    )
    await run(page)
  },
})

export { expect }
