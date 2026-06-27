import { describe, expect, test } from "bun:test";
import { abbreviateNumber, formatTimer } from "../src/core/format";

describe("format helpers", () => {
	test("abbreviates game numbers", () => {
		expect(abbreviateNumber(999)).toBe("999");
		expect(abbreviateNumber(1_500)).toBe("1.5k");
		expect(abbreviateNumber(2_000_000)).toBe("2m");
	});

	test("formats seconds as timer text", () => {
		expect(formatTimer(0)).toBe("0:00");
		expect(formatTimer(9)).toBe("0:09");
		expect(formatTimer(90)).toBe("1:30");
	});
});
