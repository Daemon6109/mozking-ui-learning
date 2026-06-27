# Phase Outcomes

Use this to decide where he is after each phase.

## Phase 0: Setup

He can:

- Open the repo.
- Open a terminal.
- Run `bun install`.
- Run `bun run check`.
- Understand green means passing.

He cannot yet:

- Write useful code.
- Debug without help.
- Touch the real UI repo.

## Phase 1: Absolute Basics

After Quest 00, he should know:

- Constants name values.
- Strings are text.
- Numbers can be changed with math.
- Booleans are true/false.
- Functions take input and return output.
- Tests compare expected and received values.

He is ready to move on when:

- He can change one constant and explain why one test failed.
- He can fix one tiny function without guessing randomly.

## Phase 2: Arrays And Objects

After Quest 01, he should know:

- What a function is.
- What parameters are.
- What return values are.
- What arrays and objects are.
- What `map`, `filter`, `find`, and `reduce` roughly do.
- How a test can fail and then pass after a fix.

He is ready to move on when:

- He can explain one test failure in plain English.
- He can make a small change to `exercise.ts` and predict which test changes.

## Phase 3: TypeScript Basics

After Quest 02, he should know:

- Types describe allowed data shapes.
- String unions are exact allowed words.
- Optional fields can be missing.
- Type errors are useful.

He is ready to move on when:

- He can identify why `"godly"` is not allowed as a trait.
- He can explain why a missing field or wrong color fails.

## Phase 4: UI Data

After Quest 03, he should know:

- UI should receive display-ready data.
- View models are prepared UI data.
- Disabled buttons need clear state.

He is ready to move on when:

- He can explain why `owned` beats "can afford" logic.
- He can change a button label and update/fix the test.

## Phase 5: Reactive UI

After Quest 04, he should know:

- A source holds state.
- A derived value comes from state.
- Updating state updates listeners.
- Cleanup prevents old subscriptions from hanging around.

He is ready to move on when:

- He can explain `source`, `derive`, and `subscribe` without exact syntax memorization.

## Phase 6: roblox-ts/Vide

After Quest 05 and the sandbox, he should know:

- roblox-ts compiles TypeScript to Luau.
- Vide components are typed TSX functions.
- Props are typed inputs.
- Roblox UI tags in TSX map to Roblox UI Instances.
- UI Labs stories are previews, not production code.
- `bun run roblox:compile` must pass before anything is reviewable.

He is ready for real repo read-only access when:

- He can run `bun run check`.
- He can run `bun run roblox:compile`.
- He can explain `lesson_button.tsx` line by line.

He is ready for real repo write access only when:

- He can make a tiny change.
- He can open a PR.
- He can handle one review comment.
- He does not use AI to rewrite whole files.
