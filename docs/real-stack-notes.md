# Real Stack Notes

The real Anime Reborn UI stack uses:

- Bun for scripts and dependency management.
- Biome for formatting/linting.
- TypeScript.
- roblox-ts to compile TypeScript into Luau.
- Vide for reactive Roblox UI components.
- UI Labs for visual component previews in Roblox Studio.

Mental model:

- Roblox Studio UI scripting mutates Instances directly.
- Vide UI describes what the UI should be from state.
- roblox-ts catches many mistakes before Studio opens.

When moving into the real repo:

1. Pull latest.
2. Install dependencies.
3. Run the repo checks.
4. Find a similar component.
5. Copy the local pattern.
6. Make the smallest change.
7. Check UI Labs.
8. Open a PR.
