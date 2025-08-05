# 🎯 Playwright TypeScript Practice

This repo is Jacob Simpson's automation testing sandbox using [Playwright](https://playwright.dev) and TypeScript.

## ✅ CI-Enabled

This suite runs automatically in [GitHub Actions](https://github.com/jacobsimpsonQA/playwright-typescript-automation/actions) on every push.  
It supports:

- ✅ Parallel test execution
- ✅ Retries and failure isolation
- ✅ Screenshots and videos for failing tests
- ✅ CI-only conditional skips (e.g., local files or flaky demos)

> All test results are visible via HTML reporter or in GitHub Actions artifacts.
``

## 🧪 Local Form Testing

Includes tests for a custom offline form (`local_qa_form.html`), now hosted live at:
🔗 https://jacobsimpsonqa.github.io/playwright-form-preview/

Tests validate:
- Required field behavior
- Positive flow (valid name + email)
- Negative flows:
  - Missing name
  - Missing both fields
  - Invalid email format
  - Whitespace-only name (new!)


## ✅ CI-Enabled

This suite runs automatically in [GitHub Actions](https://github.com/jacobsimpsonQA/playwright-typescript-automation/actions) on every push.  
It supports:

- ✅ Parallel test execution
- ✅ Retries and failure isolation
- ✅ Screenshots and videos for failing tests
- ✅ CI-only conditional skips (e.g., local files or flaky demos)

> All test results are visible via HTML reporter or in GitHub Actions artifacts.

## 📁 Test Structure

```
tests/
├─ forms/
│   ├─ local-form.spec.ts       # Local-only HTML form tests (skipped in CI)
│   ├─ selenium-form.spec.ts    # Tests selenium.dev demo form (1 skipped in CI)
│   └─ complex-form.spec.ts     # Flaky demoqa.com test (skipped in CI)
├─ archive/                     # Older or sample-based tests
│   ├─ example.spec.ts
│   └─ docs-menu.spec.ts
```

## 🎯 Test Filtering with Tags

You can run specific categories of tests using Playwright’s `--grep` flag.

### Run only core tests (CI-safe):
```bash
npx playwright test --grep @core
```

### Run only tests that depend on a local file:
```bash
npx playwright test --grep @local
```

### Run all tests except flaky or demo-tagged ones:
```bash
npx playwright test --grep-invert @flaky
```

> Tags are added to test titles like `[core]`, `[local]`, `[demo]`, etc.

You’ll be able to run subsets like:

```bash
npx playwright test --grep @core
npx playwright test --grep-invert @demo
```


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
