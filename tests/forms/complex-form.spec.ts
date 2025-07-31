import { test, expect } from '@playwright/test';

const isCI = !!process.env.CI;

test.describe('DemoQA Complex Form', () => {
  test.skip(isCI, 'Skipping complex form test in CI (ads block interaction)');

  test('complete and submit demoqa form', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  await page.goto('https://demoqa.com/automation-practice-form');
  await page.waitForSelector('#userForm', { state: 'visible' }); // Wait for form to load

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
  await page.getByRole('radio', { name: 'Male', exact: true }).check({ force: true });

  // Phone number
  await page.getByPlaceholder('Mobile Number').fill('1234567890');

  // Subject autocomplete
  await page.locator('#subjectsInput').fill('Maths');
  await page.keyboard.press('Enter');

  // Upload file
  const filePath = path.resolve(__dirname, 'test-upload.png');
  await page.setInputFiles('#uploadPicture', filePath);

  // Address
  await page.getByPlaceholder('Current Address').fill('123 QA Street');

  // Select state
  await page.locator('#state').click();
  await page.getByText('NCR', { exact: true }).click();

  // Select city
  await page.locator('#city').click();
  await page.getByText('Delhi', { exact: true }).click();

  // Submit
  await page.locator('#submit').scrollIntoViewIfNeeded();
  await page.getByRole('button', { name: 'Submit' }).click();

  // Assert success
  await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form');
});
