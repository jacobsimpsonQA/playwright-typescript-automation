import { test, expect } from '@playwright/test';

const isCI = !!process.env.CI;

test.describe('Local QA Form', () => {
  test.skip(isCI, 'Skipping local form tests in CI (requires local file path)');

  test('[local] ✅ Submits when all required fields are filled', async ({ page }) => {
    await page.goto('file:///Users/fettywaffles/Downloads/local_qa_form.html');

    await page.locator('#name').fill('Jacob');
    await page.locator('#email').fill('jacob@example.com');
    await page.locator('#message').fill('Testing the local form flow');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.locator('#success')).toBeVisible();
  });

  test('[local] ✅ Submits with special characters in the name field', async ({ page }) => {
  await page.goto('file:///Users/fettywaffles/Downloads/local_qa_form.html');

  await page.locator('#name').fill('Jacob <>');
  await page.locator('#email').fill('jacob@example.com');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('#success')).toBeVisible();
});

  test('[local] ❌ Does not show success if name is missing', async ({ page }) => {
    await page.goto('https://jacobsimpsonqa.github.io/playwright-form-preview/');

    // leave name blank
    await page.locator('#email').fill('jacob@example.com');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.locator('#success')).not.toBeVisible();
  });

    test('[local] ❌ Does not show success if both name and email are missing', async ({ page }) => {
    await page.goto('https://jacobsimpsonqa.github.io/playwright-form-preview/');

    // Leave both fields blank
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.locator('#success')).not.toBeVisible();
  });

  test('[local] ❌ Does not show success with invalid email format', async ({ page }) => {
  await page.goto('https://jacobsimpsonqa.github.io/playwright-form-preview/');

  await page.locator('#name').fill('Jacob');
  await page.locator('#email').fill('jacob@'); // invalid
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('#success')).not.toBeVisible();
});

test('❌ Does not show success with whitespace-only name', async ({ page }) => {
  await page.goto('https://jacobsimpsonqa.github.io/playwright-form-preview/');

  await page.locator('#name').fill('     ');
  await page.locator('#email').fill('jacob@example.com');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('#success-message')).not.toBeVisible();
});

});
