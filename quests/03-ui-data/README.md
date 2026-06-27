# Quest 03: UI Data

Before rendering UI, turn raw state into simple display data.

## Concepts

- View models
- Disabled states
- Empty states
- Formatting values before UI

## Exercise

```sh
bun run quest:03
```

## Break/Fix Drill

1. Change the owned button text from `"Owned"` to `"Buy"`.
2. Run `bun run quest:03`.
3. Explain why owned items must be disabled even if the player has enough gems.
4. Change it back.

The goal is to separate game data from display data.
