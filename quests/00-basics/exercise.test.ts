import { describe, expect, test } from "bun:test";

import { addGems, canOpenMenu, double, greet, playerName, startingGems, tutorialFinished } from "./exercise";

describe("quest 00", () => {
	test("stores simple constants", () => {
		expect(playerName).toBe("MozKing");
		expect(startingGems).toBe(100);
		expect(tutorialFinished).toBe(false);
	});

	test("creates text with a function", () => {
		expect(greet("MozKing")).toBe("Hello, MozKing");
	});

	test("does basic number math", () => {
		expect(addGems(100, 25)).toBe(125);
		expect(double(5)).toBe(10);
	});

	test("returns a boolean", () => {
		expect(canOpenMenu(false)).toBe(false);
		expect(canOpenMenu(true)).toBe(true);
	});
});
