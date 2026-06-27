import { describe, expect, test } from "bun:test";
import { createVisibilityLabel, createWaveLabel } from "./exercise";

describe("quest 04", () => {
	test("updates wave labels reactively", () => {
		const state = createWaveLabel(1);

		expect(state.label.get()).toBe("Wave 1");
		state.wave.set(5);
		expect(state.label.get()).toBe("Wave 5");
	});

	test("updates visibility labels reactively", () => {
		const state = createVisibilityLabel(false);

		expect(state.label.get()).toBe("Hidden");
		state.visible.set(true);
		expect(state.label.get()).toBe("Visible");
	});
});
