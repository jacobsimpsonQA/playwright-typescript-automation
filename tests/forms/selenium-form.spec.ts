import { test, expect } from '@playwright/test';

test('submit form on selenium.dev', async ({ page }) => {
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
  await page.waitForSelector('form', { state: 'visible' });

  // Fill text and textarea
  await page.locator('#my-text-id').fill('Jacob');
  await page.waitForSelector('[name="my-password"]');
  await page.locator('[name="my-password"]').fill('Secret123!');
  await page.locator('[name="my-textarea"]').fill('Playwright test automation is 🔥');

  // Check radio and checkbox
  await page.locator('#my-check-1').check();
  await page.locator('#my-radio-2').check();

  // Select from dropdown
  await page.locator('[name="my-select"]').selectOption('2'); // selects "Two"

  // Submit form
  await page.locator('button[type="submit"]').click();

  // Verify confirmation
  await expect(page.locator('#message')).toHaveText('Received!');
});
