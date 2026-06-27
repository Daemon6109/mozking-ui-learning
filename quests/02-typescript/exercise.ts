export type Trait = "swift" | "midas" | "celestial" | "none";

export type UnitProfile = {
	readonly id: string;
	readonly displayName: string;
	readonly trait: Trait;
	readonly level: number;
	readonly shiny?: boolean;
};

export type UnitBadge = {
	readonly label: string;
	readonly color: "gray" | "green" | "gold" | "blue";
};

export function getTraitBadge(unit: UnitProfile): UnitBadge {
	if (unit.trait === "none") {
		return { label: "No Trait", color: "gray" };
	}

	if (unit.trait === "midas") {
		return { label: "Midas", color: "gold" };
	}

	if (unit.trait === "celestial") {
		return { label: "Celestial", color: "blue" };
	}

	return { label: "Swift", color: "green" };
}

export function getDisplayName(unit: UnitProfile) {
	return unit.shiny ? `Shiny ${unit.displayName}` : unit.displayName;
}
