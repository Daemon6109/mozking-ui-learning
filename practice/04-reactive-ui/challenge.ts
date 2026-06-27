import { describe, expect, test } from "bun:test";

import { createCounter } from "./answer";

describe("practice 04", () => {
	test("creates a derived counter label", () => {
		const counter = createCounter(3);

		expect(counter.label.get()).toBe("Count: 3");
		counter.count.set(10);
		expect(counter.label.get()).toBe("Count: 10");
	});
});
