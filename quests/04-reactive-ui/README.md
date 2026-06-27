# Quest 04: Reactive UI

This uses a tiny local signal implementation so he understands the idea before touching Vide.

## Concepts

- State has a current value.
- Subscribers rerun when state changes.
- Derived values are computed from state.
- Cleanup prevents old listeners from staying alive.

## Exercise

```sh
bun run quest:04
```

## Break/Fix Drill

1. Change `Wave ${value}` to `Round ${value}` in `createWaveLabel`.
2. Run `bun run quest:04`.
3. Explain that the derived label changed because the transform changed.
4. Change it back.

The goal is to understand that state drives display.
