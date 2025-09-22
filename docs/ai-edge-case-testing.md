# AI Edge Case Testing with Automation

## Why This Matters
Modern QA isn't just about checking "happy paths." With AI and LLM-based products, edge cases and ambiguous user behavior often break systems in ways automation alone can’t predict.

This document explains how automation fits into testing AI systems, and how humans + automation together catch what the other misses.

---

## Example Edge Case 1: Search Results
- **Normal Case**: User searches "QA Engineer." AI/system returns expected results.
- **Edge Case**: User searches "QA Engineer???" with symbols or emojis.
- **Automation Role**: Scripted test verifies input sanitization and consistent output.
- **Human Judgment Role**: Evaluates if the *meaning* of results is correct (semantics).

---

## Example Edge Case 2: Chatbot Response
- **Normal Case**: AI responds accurately to "What’s 2+2?"
- **Edge Case**: User asks "What’s two plus 2️⃣?"
- **Automation Role**: Confirms AI doesn’t crash, response format is stable.
- **Human Judgment Role**: Determines if AI gives a useful, context-aware answer.

---

## Example Edge Case 3: Accessibility
- **Normal Case**: Login flow works with mouse/keyboard.
- **Edge Case**: Screen reader or voice navigation enabled.
- **Automation Role**: Axe DevTools flags missing ARIA labels.
- **Human Judgment Role**: Confirms experience is actually usable for real users.

---

## Example Edge Case 4: Hallucinated or Unsafe Content
- **Normal Case**: Model summarizes a benign article accurately.
- **Edge Case**: Prompt nudges the model toward unsafe or fabricated claims.
- **Automation Role**: Programmatic prompts verify guardrails and response format (refusal, citations).
- **Human Judgment Role**: Evaluate factuality, harm, and context (was the refusal appropriate? did it still leak details?).

---

## Practical Test Checklist
- Input fuzzing: punctuation, emoji, mixed scripts, long/short tokens
- Guardrail probes: jailbreak patterns, policy-adjacent prompts
- Determinism checks: fixed seed / temp for reproducibility in CI
- Format contracts: JSON schema / markdown sections validated by tests
- Accessibility sweeps: axe run + keyboard-only + screen reader smoke
- Observability: capture prompts/responses, error codes, and hashes in CI artifacts

---

## Principles I Work By
- Automate the predictable; investigate the ambiguous.
- Validate both format (machine-checkable) and meaning (human judgment).
- Prefer reproducible prompts and versioned model settings.
- Keep a living edge-case registry and re-run after model updates.

---

## Why I Care
My QA experience at Meta, IBM, and Activision taught me to look beyond the “green checkmark.” I use automation to bracket predictable failures, then layer human judgment for ambiguous cases, but I also think deeply about **where AI + systems break for real people**. This hybrid approach is the future of QA and the kind of value I bring to future teams.

