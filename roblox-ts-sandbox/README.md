# roblox-ts Sandbox

This folder is the real Roblox compile target. It is separate from the root Bun/Node lessons on purpose.

## Commands

```sh
bun run compile
bun run watch
```

From the repo root:

```sh
bun run roblox:compile
```

## What This Teaches

- `src/shared`: pure typed data/view-model helpers.
- `src/client`: Vide UI components and client mounting.
- `src/server`: simple server-side roblox-ts file.
- `src/stories`: UI Labs story shape.

This is still a learning sandbox. The real UI repo has more architecture, assets, stores, hooks, and app registration.

## Teaching Drill

1. Run `bun run roblox:compile` from the repo root.
2. Open `src/client/lesson_button.tsx`.
3. Change the button label fallback from `"Clicked"` to `"Pressed"`.
4. Compile again.
5. Change a real UI property, like `TextSize`.
6. Compile again.

Only after that should he look at a real Anime Reborn UI component.
