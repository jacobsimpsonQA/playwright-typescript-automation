import { test, expect } from '@playwright/test';

test.describe('Selenium Web Form Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    await page.waitForSelector('form', { state: 'visible' });
  });

  test('✅ Submits form successfully with all fields filled', async ({ page }) => {
    await page.locator('#my-text-id').fill('Jacob');
    await page.locator('[name="my-password"]').fill('Secret123!');
    await page.locator('[name="my-textarea"]').fill('Playwright test automation is 🔥');
    await page.locator('#my-check-1').check();
    await page.locator('#my-radio-2').check();
    await page.locator('[name="my-select"]').selectOption('2');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('#message')).toHaveText('Received!');
  });

  test('❌ Fails to submit when required password is missing', async ({ page }) => {
    await page.locator('#my-text-id').fill('Jacob');
    // Password intentionally left blank
    await page.locator('[name="my-textarea"]').fill('Testing missing password.');
    await page.locator('#my-check-1').check();
    await page.locator('#my-radio-2').check();
    await page.locator('[name="my-select"]').selectOption('2');
    await page.locator('button[type="submit"]').click();
    
    // Expect NOT to see success message
    await expect(page.locator('#message')).not.toBeVisible();
  });

});
