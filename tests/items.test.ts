import { describe, expect, test } from "bun:test";
import { filterUnlocked, sortItemsForDisplay, toItemCard, type InventoryItem } from "../src/inventory/items";

const items: InventoryItem[] = [
	{ id: "a", name: "Ramen", rarity: "common", amount: 25 },
	{ id: "b", name: "Trait Crystal", rarity: "legendary", amount: 2, locked: true },
	{ id: "c", name: "Cursed Fragment", rarity: "epic", amount: 10 },
];

describe("inventory view models", () => {
	test("sorts strongest rarity first", () => {
		expect(sortItemsForDisplay(items).map((item) => item.id)).toEqual(["b", "c", "a"]);
	});

	test("creates a display card", () => {
		expect(toItemCard(items[1])).toEqual({
			id: "b",
			title: "Trait Crystal",
			subtitle: "LEGENDARY x2",
			disabled: true,
		});
	});

	test("filters locked items", () => {
		expect(filterUnlocked(items).map((item) => item.id)).toEqual(["a", "c"]);
	});
});
