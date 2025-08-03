import { test, expect } from '@playwright/test';
import path from 'path';

const isCI = !!process.env.CI;

test.describe('DemoQA Complex Form', () => {
  test.skip(isCI, 'Skipping complex form test in CI (ads block interaction)');

  test('complete and submit demoqa form', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.waitForSelector('#userForm', { state: 'visible' });

    // Fill basic fields
    await page.getByPlaceholder('First Name').fill('Jacob');
    await page.getByPlaceholder('Last Name').fill('Simpson');
    await page.getByPlaceholder('name@example.com').fill('jacob@example.com');

    // Remove ad banner that blocks clicks
    await page.evaluate(() => {
      const ad = document.querySelector('#fixedban');
      if (ad) ad.remove();
    });

    // Select gender radio
    await page.getByRole('radio', { name: 'Male', exact: true }).check();

    // Phone number
    await page.getByPlaceholder('Mobile Number').fill('1234567890');

    // Date of birth — optional to skip or leave default

    // Select hobby checkbox
    await page.getByLabel('Reading').check();

    // Upload file
    const filePath = path.resolve(__dirname, 'test-upload.png');
    await page.setInputFiles('#uploadPicture', filePath);

    // Current address
    await page.locator('#currentAddress').fill('123 QA Lane');

    // Select state
    await page.locator('#state').click();
    await page.getByText('NCR', { exact: true }).click();

    // Select city
    await page.locator('#city').click();
    await page.getByText('Delhi', { exact: true }).click();

    // Submit
    await page.getByRole('button', { name: 'Submit' }).click();

    // Confirmation modal
    await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form');
  });
});
