# MozKing UI Learning

Small repo for teaching enough JavaScript, TypeScript, tests, reactive UI thinking, and roblox-ts/Vide patterns to safely work near the Anime Reborn UI stack.

This is intentionally outside the real UI repo. The default checks should stay green. Use the quest folders when teaching one topic at a time.

The repo is split into two tracks:

- Root: normal Bun/TypeScript learning with unit tests.
- `roblox-ts-sandbox/`: real roblox-ts + Vide code that compiles with `rbxtsc`.

## Setup

```sh
bun install
bun run check
```

If he is brand new, do this before teaching any syntax:

1. Open the repo in VS Code.
2. Open the terminal.
3. Run `bun install`.
4. Run `bun run check`.
5. Explain that green output means the computer agrees the repo is working.

Then follow [the mentor guide](docs/mentor-guide.md). Do not start with Docker, roblox-ts, or Vide.

## Daily Flow

```sh
bun test
bun run typecheck
bun run lint
bun run format:write
```

## Roblox TS Sandbox

```sh
bun run roblox:compile
bun run roblox:watch
```

The sandbox has its own [tsconfig](roblox-ts-sandbox/tsconfig.json), [Rojo project](roblox-ts-sandbox/default.project.json), client code, server code, shared view-model code, and a UI Labs story example.

## Quest Flow

Run one quest at a time:

```sh
bun run quest:01
bun run quest:02
bun run quest:03
bun run quest:04
bun run quest:05
```

## Docker

```sh
docker build -t mozking-ui-learning .
docker run --rm mozking-ui-learning
```

Or watch tests:

```sh
docker compose up --build
```

## Teaching Order

1. JavaScript basics: variables, functions, arrays, objects.
2. TypeScript basics: object types, unions, optional fields, compiler errors.
3. UI data: turning raw game state into view models.
4. Reactive UI: source, derive, effect, cleanup.
5. roblox-ts/Vide: read existing TSX patterns and avoid Studio-only habits.

The important habit is copying the existing repo style and making small reviewed changes.

## For The Teacher

- Use [docs/mentor-guide.md](docs/mentor-guide.md) as the main script.
- Use [docs/phase-outcomes.md](docs/phase-outcomes.md) to decide whether he is ready to move on.
- Use [docs/repo-access-checklist.md](docs/repo-access-checklist.md) before giving real UI repo write access.
