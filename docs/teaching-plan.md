# Teaching Plan

## Day 1: Programming Basics

Goal: read and edit simple TypeScript without freezing.

- `const` and `let`
- Functions and return values
- Objects and arrays
- `map`, `filter`, `find`, `reduce`
- `if`, `else`, early returns
- Import and export
- Bun tests as feedback

Checkpoint: run `bun run quest:01`.

## Day 2: TypeScript

Goal: understand types well enough to follow compiler errors.

- Primitive types
- Object types
- Optional fields
- Union types
- Literal unions
- Type narrowing
- `ReadonlyArray`
- Type aliases over `any`

Checkpoint: run `bun run quest:02`.

## Day 3: UI Data

Goal: convert game data into display-ready values before rendering.

- View models
- Formatting numbers
- Sorting/filtering visible items
- Empty states
- Disabled button reasons

Checkpoint: run `bun run quest:03`.

## Day 4: Reactive UI

Goal: understand why Vide uses sources and derived values.

- Signals/sources
- Derived values
- Effects
- Cleanup
- Event handlers

Checkpoint: run `bun run quest:04`.

## Day 5: roblox-ts/Vide Orientation

Goal: safely read project components and make tiny changes.

- TSX component props
- Roblox UI instance props
- `source`, `derive`, `For`, `Index`
- UI Labs as preview workflow
- `rbxtsc` compile feedback
- PR hygiene

Checkpoint: run `bun run quest:05`.

## Rules For Him

- Do not build UI in Studio and try to paste it into the repo.
- Do not rewrite a component because AI suggested a cleaner version.
- Start every task by finding the closest existing component.
- Make one small change, run checks, then commit.
- Ask when a compiler error points into unfamiliar framework code.
