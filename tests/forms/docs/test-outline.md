# 🧪 Playwright Form Test Outline

## ✅ Test Suite: Local QA Form

All tests are written against a custom offline form to ensure full control and stability.

### ✅ Test 1: Successful submission
- Fills name and email
- Fills message (optional)
- Submits form
- Expects success message to be visible

### ❌ Test 2: Missing name
- Leaves name blank
- Fills valid email
- Submits form
- Expects no success message

### ❌ Test 3: Missing both fields
- Leaves both name and email blank
- Submits form
- Expects no success message

## 🔍 Notes
- The form uses HTML5 validation and JS to show a success `<p>` only if required fields are present
- Tests validate client-side blocking behavior and UI feedback
