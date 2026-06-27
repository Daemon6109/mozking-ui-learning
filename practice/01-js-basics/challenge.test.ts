import { describe, expect, test } from "bun:test";

import { findById, getDamageTotal, getEquipped, getNames, type Unit } from "./answer";

const units: Unit[] = [
	{ id: "naruto", name: "Naruto", damage: 50, equipped: true },
	{ id: "sasuke", name: "Sasuke", damage: 70, equipped: false },
	{ id: "gojo", name: "Gojo", damage: 120, equipped: true },
];

describe("practice 01", () => {
	test("gets unit names", () => {
		expect(getNames(units)).toEqual(["Naruto", "Sasuke", "Gojo"]);
	});

	test("gets equipped units", () => {
		expect(getEquipped(units).map((unit) => unit.id)).toEqual(["naruto", "gojo"]);
	});

	test("finds one unit by id", () => {
		expect(findById(units, "sasuke")?.name).toBe("Sasuke");
	});

	test("adds damage together", () => {
		expect(getDamageTotal(units)).toBe(240);
	});
});
