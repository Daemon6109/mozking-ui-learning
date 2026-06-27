export type Unit = {
	readonly id: string;
	readonly name: string;
	readonly damage: number;
	readonly equipped: boolean;
};

export function getNames(_units: ReadonlyArray<Unit>) {
	return [];
}

export function getEquipped(_units: ReadonlyArray<Unit>) {
	return [];
}

export function findById(_units: ReadonlyArray<Unit>, _id: string) {
	return undefined;
}

export function getDamageTotal(_units: ReadonlyArray<Unit>) {
	return 0;
}
