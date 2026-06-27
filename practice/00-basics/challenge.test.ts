import { describe, expect, test } from "bun:test";

import { addGold, canStart, isReady, playerName, sayWelcome, startingGold, subtractHealth } from "./answer";

describe("practice 00", () => {
	test("defines constants", () => {
		expect(playerName).toBe("MozKing");
		expect(startingGold).toBe(100);
		expect(isReady).toBe(true);
	});

	test("returns welcome text", () => {
		expect(sayWelcome("MozKing")).toBe("Welcome, MozKing!");
	});

	test("adds gold", () => {
		expect(addGold(100, 25)).toBe(125);
	});

	test("subtracts health", () => {
		expect(subtractHealth(100, 30)).toBe(70);
	});

	test("returns whether the player can start", () => {
		expect(canStart(true)).toBe(true);
		expect(canStart(false)).toBe(false);
	});
});
