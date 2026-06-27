import { describe, expect, test } from "bun:test";
import { explainConcept, shouldTouchRealUiRepo } from "./exercise";

describe("quest 05", () => {
	test("explains Vide concepts", () => {
		expect(explainConcept("source")).toContain("reactive value");
		expect(explainConcept("UI Labs")).toContain("preview workflow");
	});

	test("guards repo access", () => {
		expect(shouldTouchRealUiRepo(4, true)).toBe(false);
		expect(shouldTouchRealUiRepo(5, false)).toBe(false);
		expect(shouldTouchRealUiRepo(5, true)).toBe(true);
	});
});
