export type Unit = {
	readonly id: string;
	readonly name: string;
	readonly damage: number;
	readonly equipped: boolean;
};

export function getUnitNames(units: ReadonlyArray<Unit>) {
	return units.map((unit) => unit.name);
}

export function getEquippedUnits(units: ReadonlyArray<Unit>) {
	return units.filter((unit) => unit.equipped);
}

export function findUnitById(units: ReadonlyArray<Unit>, id: string) {
	return units.find((unit) => unit.id === id);
}

export function getTotalDamage(units: ReadonlyArray<Unit>) {
	return units.reduce((total, unit) => total + unit.damage, 0);
}
