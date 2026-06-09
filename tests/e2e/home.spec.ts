import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = ['/de', '/en'];

for (const route of routes) {
  test(`${route} renders`, async ({ page }) => {
    await page.goto(route, { waitUntil: 'commit' });
    await expect(page).toHaveURL(new RegExp(route));
  });
}

test('home page (de) has no a11y violations', async ({ page }) => {
  await page.goto('/de', { waitUntil: 'networkidle' });
  const { violations } = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();
  expect(violations).toEqual([]);
});
