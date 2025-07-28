# 🎯 Playwright TypeScript Practice

This repo is Jacob Simpson's automation testing sandbox using [Playwright](https://playwright.dev) and TypeScript.

## ✅ What’s Covered

- Navigation and URL assertions
- Locators: `getByRole`, `getByPlaceholder`, `locator()`
- Positive and negative assertions (`toBeVisible`, `not.toBeVisible`, `toContainText`)
- Test structure using `test.describe()` and `beforeEach()` hooks
- Form interaction and submission validation
- Complete working form automation using https://selenium.dev/selenium/web/web-form.html


## 📂 Project Structure

```
tests/
├── basics/       # Foundational navigation and locator tests
├── forms/        # Input and submission tests (e.g. DemoQA form)
```

## 🚀 How to Run

```bash
npx playwright test
```

Run specific files:

```bash
npx playwright test tests/forms/text-box-form.spec.ts
```
