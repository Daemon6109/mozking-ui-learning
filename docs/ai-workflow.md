# AI Workflow

Good AI usage:

- Ask it to explain one file.
- Ask it to write a test for one function.
- Ask it why a TypeScript error is happening.
- Ask it to make a small change in the style of an existing component.

Bad AI usage:

- Pasting a whole component rewrite into the real repo.
- Asking it to invent new architecture.
- Ignoring compiler errors because the generated code looks right.
- Letting it rename files or move folders without review.

Useful prompt:

```text
Explain this file like I know basic TypeScript but not this repo yet. Point out the props, state, derived values, and event handlers.
```

Useful edit prompt:

```text
Make the smallest possible change to this component. Match the existing style. Do not restructure unrelated code.
```
