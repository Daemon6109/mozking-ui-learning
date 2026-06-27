import { source } from "../../src/reactive/signal";

export function createCounter(_initialValue: number) {
	const count = source(0);
	const label = source("TODO");

	return {
		count,
		label,
	};
}
