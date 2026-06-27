# Quest 02: TypeScript

Teach him to let the compiler guide him.

## Concepts

- `type`
- Literal unions
- Optional fields
- Returning exact object shapes
- Replacing `any` with a real type

## Exercise

Run:

```sh
bun run quest:02
bun run typecheck
```

## Break/Fix Drill

1. Change `"celestial"` to `"godly"` in the test.
2. Run `bun run typecheck`.
3. Explain that TypeScript only allows the exact trait strings in `Trait`.
4. Change it back.

The goal is to learn that type errors are early help, not random noise.
