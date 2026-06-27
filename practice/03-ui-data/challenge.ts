import { describe, expect, test } from "bun:test";

import { createUpgradeButton } from "./answer";

describe("practice 03", () => {
	test("allows upgrade when affordable", () => {
		expect(createUpgradeButton({ level: 2, maxLevel: 5, cost: 100, gems: 250 })).toEqual({
			text: "Upgrade",
			enabled: true,
		});
	});

	test("blocks upgrade when maxed", () => {
		expect(createUpgradeButton({ level: 5, maxLevel: 5, cost: 100, gems: 250 })).toEqual({
			text: "Max Level",
			enabled: false,
		});
	});

	test("blocks upgrade when too expensive", () => {
		expect(createUpgradeButton({ level: 2, maxLevel: 5, cost: 300, gems: 250 })).toEqual({
			text: "Need 50 more",
			enabled: false,
		});
	});
});
