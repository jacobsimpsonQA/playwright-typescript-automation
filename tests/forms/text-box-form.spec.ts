import { test, expect } from '@playwright/test';

test('[core] fill out and submit the text box form', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');

    // Fill out the form
    await page.getByPlaceholder('Full Name').fill('Jacob Simpson');
    await page.getByPlaceholder('name@example.com').fill('jacob@example.com');
    await page.locator('#currentAddress').fill('123 QA Lane');
    await page.locator('#permanentAddress').fill('456 Automation Ave');

    // Submit 
    await page.getByRole('button', { name: 'Submit' }).click();

    // Assertions
    await expect(page.locator('#output')).toBeVisible();
    await expect(page.locator('#name')).toContainText('Jacob Simpson');
    await expect(page.locator('#email')).toContainText('jacob@example.com');
    
});