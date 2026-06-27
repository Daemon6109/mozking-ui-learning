import { derive, source } from "../../src/reactive/signal";

export function createWaveLabel(initialWave: number) {
	const wave = source(initialWave);
	const label = derive(wave, (value) => `Wave ${value}`);

	return {
		wave,
		label,
	};
}

export function createVisibilityLabel(initialVisible: boolean) {
	const visible = source(initialVisible);
	const label = derive(visible, (value) => (value ? "Visible" : "Hidden"));

	return {
		visible,
		label,
	};
}
