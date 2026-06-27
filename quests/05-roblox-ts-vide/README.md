# Quest 05: roblox-ts/Vide Orientation

This is not a replacement for the real UI repo. It is a bridge.

## Concepts

- roblox-ts is TypeScript that compiles to Luau.
- Vide components are TSX functions.
- Props should be typed.
- State should be reactive instead of manually mutating random UI instances.
- UI Labs is where he previews components before a real integration.

## Read This Pattern

```tsx
import Vide, { derive, source } from "@rbxts/vide";

type CounterProps = {
	readonly initialCount: number;
};

export function Counter(props: CounterProps) {
	const count = source(props.initialCount);
	const label = derive(() => `Count: ${count()}`);

	return <textbutton Text={label} MouseButton1Click={() => count(count() + 1)} />;
}
```

The real repo has the exact conventions that matter. In actual work, he should find the closest existing component first.

## Exercise

```sh
bun run quest:05
bun run roblox:compile
```

## Break/Fix Drill

1. Open `roblox-ts-sandbox/src/client/lesson_button.tsx`.
2. Rename `MouseButton1Click` to `FakeClick`.
3. Run `bun run roblox:compile`.
4. Read the compiler error.
5. Change it back.

The goal is to trust `rbxtsc` before touching the real UI repo.
