import { test, expect } from '@playwright/test';

test('navigate docs menu and verify page content', async ({ page }) => { 
    await page.goto('https://playwright.dev');

    // Click "Get Started"
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page).toHaveURL(/.*docs\/intro/);
    await expect(page.getByRole('heading', { name: 'Installation'})).toBeVisible();

    // Click "Assertions" in the sidebar 
    await page.getByRole('link', { name: 'Assertions', exact: true }).click();
    await expect(page).toHaveURL(/.*docs\/test-assertions/);

    // Updated assertion
    await expect(page.locator('h1')).toContainText('Assertions');

    // Negative test - "Installation" heading should NOT be visible anymore
    await expect(page.getByRole('heading', { name: 'Installation' })).not.toBeVisible();
});