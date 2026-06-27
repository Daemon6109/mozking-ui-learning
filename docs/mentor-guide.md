# Mentor Guide

This guide assumes the student knows basically nothing about programming.

Your job is not to explain every detail. Your job is to get him comfortable with the loop:

1. Read a tiny piece of code.
2. Predict what it does.
3. Run a test.
4. Break it on purpose.
5. Read the failure.
6. Fix it.
7. Run the test again.

That loop matters more than memorizing syntax.

## Rule For You

Do not lecture for more than five minutes at a time. Make him run or edit something constantly.

Do not start with roblox-ts, Vide, Docker, GitHub, or AI. Those are too much at zero.

## First 20 Minutes

1. Open VS Code in this repo.
2. Show the file tree.
3. Open the terminal.
4. Run `bun install`.
5. Run `bun run check`.
6. Say: "This means all tests, type checks, lint, spelling, and roblox-ts compile are passing."
7. Open `quests/01-js-basics/exercise.ts`.
8. Open `quests/01-js-basics/exercise.test.ts` beside it.

Teach this mental model:

- `exercise.ts` is the code.
- `exercise.test.ts` is the proof.
- A test describes what the code must do.
- Passing means the code matches the proof.
- Failing means the proof and code disagree.

## How To Teach A Quest

For every quest:

1. Read the README.
2. Run the quest script while it is passing.
3. Pick one function.
4. Ask him what the function takes in.
5. Ask him what it returns.
6. Break the function on purpose.
7. Run the quest script again.
8. Make him read the failing expected/received values.
9. Fix it.
10. Run the quest script again.

Do not move on until he can explain the failure in plain English.

## Quest 01 Script

Command:

```sh
bun run quest:01
```

Open:

- `quests/01-js-basics/exercise.ts`
- `quests/01-js-basics/exercise.test.ts`

Teach:

- A value is a piece of data.
- A variable names a value.
- A function is a reusable action.
- An array is a list.
- An object is a bundle of named values.

Break/fix drills:

- Change `unit.name` to `unit.id` in `getUnitNames`.
- Change `unit.equipped` to `!unit.equipped` in `getEquippedUnits`.
- Change the starting total in `getTotalDamage` from `0` to `100`.

He should be able to say:

- "`map` transforms every item."
- "`filter` keeps some items."
- "`find` returns one matching item."
- "`reduce` combines a list into one value."

## Quest 02 Script

Command:

```sh
bun run quest:02
bun run typecheck
```

Open:

- `quests/02-typescript/exercise.ts`
- `quests/02-typescript/exercise.test.ts`

Teach:

- TypeScript describes the shape of data.
- A type error is not a disaster. It is early feedback.
- Literal unions are allowed exact words.
- Optional fields might be missing.

Break/fix drills:

- Change `"celestial"` to `"godly"` in the test and run `bun run typecheck`.
- Return `{ label: "Midas", color: "yellow" }` and let TypeScript complain.
- Remove the `?` from `shiny?: boolean` and see what breaks.

He should be able to say:

- "This object must have these fields."
- "This field can only be one of these strings."
- "Optional means it might not exist."

## Quest 03 Script

Command:

```sh
bun run quest:03
```

Open:

- `quests/03-ui-data/exercise.ts`

Teach:

- UI code should be fed simple display-ready data.
- A view model is data prepared for UI.
- Buttons need state: text, enabled/disabled, reason.

Break/fix drills:

- Flip `canBuy` to `!canBuy`.
- Change `buttonText` for the owned case.
- Change the gem comparison from `<` to `<=`.

He should be able to say:

- "Raw game state goes in."
- "Display data comes out."
- "The UI should not do all this logic inline."

## Quest 04 Script

Command:

```sh
bun run quest:04
```

Open:

- `src/reactive/signal.ts`
- `quests/04-reactive-ui/exercise.ts`

Teach:

- A source stores a value.
- Setting a source updates anyone listening.
- A derived value is computed from another value.
- Cleanup removes a listener.

Break/fix drills:

- Change `Wave ${value}` to `Round ${value}`.
- Change `"Visible"` and `"Hidden"` around.
- Comment out `listener(currentValue)` inside `subscribe` and see why initial values matter.

He should be able to say:

- "Reactive state means the display updates when state changes."
- "Derived state should not be manually duplicated."

## Quest 05 Script

Command:

```sh
bun run quest:05
bun run roblox:compile
```

Open:

- `quests/05-roblox-ts-vide/exercise.ts`
- `roblox-ts-sandbox/src/client/lesson_button.tsx`
- `roblox-ts-sandbox/src/shared/shop.ts`
- `roblox-ts-sandbox/src/stories/lesson_button.story.tsx`

Teach:

- roblox-ts is TypeScript for Roblox.
- Vide components are TSX functions.
- Props are typed inputs to components.
- Roblox UI tags like `textbutton` become Roblox Instances.
- `rbxtsc` is the compiler that catches Roblox-side mistakes.

Break/fix drills:

- Change `label` prop type from `string` to `number` and run `bun run roblox:compile`.
- Rename `MouseButton1Click` to a fake prop and run the compiler.
- Change `Color3.fromRGB(32, 120, 255)` and compile.
- Change the story label and compile.

He should be able to say:

- "This TSX describes Roblox UI."
- "Props come into the component."
- "A source is reactive state."
- "Compile passing does not mean the UI looks good, but compile failing means it is not ready."

## Where He Will Probably Get Stuck

- Terminal path: he may run commands from the wrong folder.
- Test output: he may not know which line matters.
- Arrays: `map`, `filter`, and `find` look similar at first.
- Types: he may think TypeScript errors are random instead of useful.
- Reactive state: he may expect direct mutation like Roblox Studio UI scripts.
- roblox-ts: he may not understand that `rbxtsc` outputs Luau.
- Vide TSX: it looks like HTML, but it is Roblox Instances.

When stuck, ask:

- "What file are we in?"
- "What command did we run?"
- "What did the test expect?"
- "What did it receive?"
- "What is the smallest thing we can change?"

## When To Stop

Stop the lesson before he is fried. It is better to do five short sessions than one giant one.

A good first session is only Quest 01 and a little TypeScript vocabulary.
