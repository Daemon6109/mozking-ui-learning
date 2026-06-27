export type UpgradeState = {
	readonly level: number;
	readonly maxLevel: number;
	readonly cost: number;
	readonly gems: number;
};

export type UpgradeButtonView = {
	readonly text: string;
	readonly enabled: boolean;
};

export function createUpgradeButton(_state: UpgradeState): UpgradeButtonView {
	return {
		text: "TODO",
		enabled: false,
	};
}
