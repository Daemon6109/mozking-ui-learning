import { describe, expect, test } from "bun:test";

import { canUseItem, createRarityBadge, type Item } from "./answer";

describe("practice 02", () => {
	test("creates rarity badges", () => {
		expect(createRarityBadge({ id: "1", name: "Trait Crystal", rarity: "legendary" })).toEqual({
			text: "LEGENDARY",
			color: "gold",
		});

		expect(createRarityBadge({ id: "2", name: "Ramen", rarity: "common" })).toEqual({
			text: "COMMON",
			color: "gray",
		});
	});

	test("blocks locked items", () => {
		const unlocked: Item = { id: "1", name: "Ramen", rarity: "common" };
		const locked: Item = { id: "2", name: "Trait Crystal", rarity: "legendary", locked: true };

		expect(canUseItem(unlocked)).toBe(true);
		expect(canUseItem(locked)).toBe(false);
	});
});
