import { test, expect } from '@playwright/test';

test('Wikipedia search works', async ({ page }) => {
  await page.goto('https://www.wikipedia.org');
  await page.locator('input[name="search"]').fill('Playwright');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/.*Playwright.*/);
});
