export type Rarity = "common" | "rare" | "epic" | "legendary";

export type Item = {
	readonly id: string;
	readonly name: string;
	readonly rarity: Rarity;
	readonly locked?: boolean;
};

export type Badge = {
	readonly text: string;
	readonly color: "gray" | "blue" | "purple" | "gold";
};

export function createRarityBadge(_item: Item): Badge {
	return {
		text: "Unknown",
		color: "gray",
	};
}

export function canUseItem(_item: Item) {
	return false;
}
