import { describe, expect, test } from "bun:test";
import { createPurchaseButton } from "../src/ui/button-model";

describe("button view model", () => {
	test("enables a valid purchase", () => {
		expect(createPurchaseButton({ itemName: "VIP", price: 500, gems: 750, owned: false })).toEqual({
			label: "Buy VIP",
			enabled: true,
		});
	});

	test("disables already owned items", () => {
		expect(createPurchaseButton({ itemName: "VIP", price: 500, gems: 750, owned: true })).toMatchObject({
			label: "Owned",
			enabled: false,
		});
	});

	test("shows missing gems", () => {
		expect(createPurchaseButton({ itemName: "VIP", price: 500, gems: 125, owned: false })).toMatchObject({
			label: "Need 375 more",
			enabled: false,
		});
	});
});
