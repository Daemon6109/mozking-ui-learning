import { describe, expect, test } from "bun:test";
import { getDisplayName, getTraitBadge, type UnitProfile } from "./exercise";

describe("quest 02", () => {
	test("returns a badge for a trait", () => {
		const unit: UnitProfile = { id: "1", displayName: "Gojo", trait: "celestial", level: 1 };

		expect(getTraitBadge(unit)).toEqual({ label: "Celestial", color: "blue" });
	});

	test("handles optional shiny field", () => {
		expect(getDisplayName({ id: "1", displayName: "Gojo", trait: "none", level: 1 })).toBe("Gojo");
		expect(getDisplayName({ id: "1", displayName: "Gojo", trait: "none", level: 1, shiny: true })).toBe("Shiny Gojo");
	});
});
