# Repo Access Checklist

Do not give write access to the real UI repo until he can do these without help:

- Run `bun install`.
- Run tests.
- Run typecheck.
- Run Biome.
- Explain `map`, `filter`, and `find`.
- Explain an object type.
- Explain what a prop is.
- Explain what a reactive value is.
- Make a branch.
- Make a small commit.
- Open a PR.
- Fix one requested review change.

Safe first real task:

- Change text, spacing, or a tiny view model field in one existing component.

Unsafe first real task:

- Build a full screen.
- Touch shared hooks.
- Touch package config.
- Touch state sync.
- Touch deployment/build scripts.
