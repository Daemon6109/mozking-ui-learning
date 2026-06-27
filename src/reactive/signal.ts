export type Listener<T> = (value: T) => void;
export type Cleanup = () => void;

export type Source<T> = {
	get(): T;
	set(value: T): void;
	subscribe(listener: Listener<T>): Cleanup;
};

export function source<T>(initialValue: T): Source<T> {
	let currentValue = initialValue;
	const listeners = new Set<Listener<T>>();

	return {
		get() {
			return currentValue;
		},
		set(value) {
			currentValue = value;

			for (const listener of listeners) {
				listener(currentValue);
			}
		},
		subscribe(listener) {
			listeners.add(listener);
			listener(currentValue);

			return () => {
				listeners.delete(listener);
			};
		},
	};
}

export function derive<TInput, TOutput>(input: Source<TInput>, transform: (value: TInput) => TOutput): Source<TOutput> {
	const output = source(transform(input.get()));

	input.subscribe((value) => {
		output.set(transform(value));
	});

	return output;
}
