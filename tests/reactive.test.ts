import { describe, expect, test } from "bun:test";
import { derive, source } from "../src/reactive/signal";

describe("mini reactive model", () => {
	test("notifies subscribers when a value changes", () => {
		const gems = source(10);
		const seen: number[] = [];

		const cleanup = gems.subscribe((value) => {
			seen.push(value);
		});

		gems.set(20);
		cleanup();
		gems.set(30);

		expect(seen).toEqual([10, 20]);
	});

	test("derives display values from state", () => {
		const wave = source(1);
		const label = derive(wave, (value) => `Wave ${value}`);

		expect(label.get()).toBe("Wave 1");
		wave.set(12);
		expect(label.get()).toBe("Wave 12");
	});
});
