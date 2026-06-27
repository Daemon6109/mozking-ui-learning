# MozKing UI Learning

Small repo for teaching enough JavaScript, TypeScript, tests, reactive UI thinking, and roblox-ts/Vide patterns to safely work near the Anime Reborn UI stack.

This is intentionally outside the real UI repo. The default checks should stay green. Use the quest folders when teaching one topic at a time.

## Setup

```sh
bun install
bun run check
```

## Daily Flow

```sh
bun test
bun run typecheck
bun run lint
bun run format:write
```

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
