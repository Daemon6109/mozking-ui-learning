import { describe, expect, test } from "bun:test";
import { createShopCard } from "./exercise";

describe("quest 03", () => {
	test("creates a buyable shop card", () => {
		expect(createShopCard({ id: "vip", name: "VIP", price: 500, owned: false }, 900)).toMatchObject({
			buttonText: "Buy",
			canBuy: true,
		});
	});

	test("creates a disabled shop card", () => {
		expect(createShopCard({ id: "vip", name: "VIP", price: 500, owned: false }, 100)).toMatchObject({
			buttonText: "Not enough gems",
			canBuy: false,
		});
	});

	test("shows owned state first", () => {
		expect(createShopCard({ id: "vip", name: "VIP", price: 500, owned: true }, 900)).toMatchObject({
			buttonText: "Owned",
			canBuy: false,
		});
	});
});
