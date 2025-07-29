import { test, expect } from '@playwright/test';

test('visit example.com and verify title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
