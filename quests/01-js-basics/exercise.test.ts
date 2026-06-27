import { describe, expect, test } from "bun:test";
import { findUnitById, getEquippedUnits, getTotalDamage, getUnitNames, type Unit } from "./exercise";

const units: Unit[] = [
	{ id: "naruto", name: "Naruto", damage: 50, equipped: true },
	{ id: "sasuke", name: "Sasuke", damage: 70, equipped: false },
	{ id: "gojo", name: "Gojo", damage: 120, equipped: true },
];

describe("quest 01", () => {
	test("gets names", () => {
		expect(getUnitNames(units)).toEqual(["Naruto", "Sasuke", "Gojo"]);
	});

	test("filters equipped units", () => {
		expect(getEquippedUnits(units).map((unit) => unit.id)).toEqual(["naruto", "gojo"]);
	});

	test("finds by id", () => {
		expect(findUnitById(units, "gojo")?.name).toBe("Gojo");
	});

	test("totals damage", () => {
		expect(getTotalDamage(units)).toBe(240);
	});
});
