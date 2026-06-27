import { describe, expect, test } from "bun:test";
import { addGems, canEnterAdvancedStage, getHighestLevelPlayer, greetPlayer } from "../src/core/basics";

describe("basic programming examples", () => {
	test("greets a player", () => {
		expect(greetPlayer("MozKing")).toBe("Welcome, MozKing!");
	});

	test("checks stage requirements", () => {
		expect(canEnterAdvancedStage({ id: "1", name: "MozKing", level: 9, gems: 0, completedTutorial: true })).toBe(false);
		expect(canEnterAdvancedStage({ id: "1", name: "MozKing", level: 10, gems: 0, completedTutorial: true })).toBe(true);
	});

	test("updates immutable objects", () => {
		const profile = { id: "1", name: "MozKing", level: 5, gems: 10, completedTutorial: true };
		const updated = addGems(profile, 25);

		expect(updated.gems).toBe(35);
		expect(profile.gems).toBe(10);
	});

	test("finds the highest level player", () => {
		const highest = getHighestLevelPlayer([
			{ id: "a", name: "A", level: 5, gems: 0, completedTutorial: true },
			{ id: "b", name: "B", level: 22, gems: 0, completedTutorial: true },
			{ id: "c", name: "C", level: 11, gems: 0, completedTutorial: true },
		]);

		expect(highest?.id).toBe("b");
	});
});
