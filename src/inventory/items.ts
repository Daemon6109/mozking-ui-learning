import { abbreviateNumber } from "../core/format";

export type Rarity = "common" | "rare" | "epic" | "legendary" | "mythic";

export type InventoryItem = {
	readonly id: string;
	readonly name: string;
	readonly rarity: Rarity;
	readonly amount: number;
	readonly locked?: boolean;
};

export type ItemCardView = {
	readonly id: string;
	readonly title: string;
	readonly subtitle: string;
	readonly disabled: boolean;
};

const rarityRank: Record<Rarity, number> = {
	common: 1,
	rare: 2,
	epic: 3,
	legendary: 4,
	mythic: 5,
};

export function sortItemsForDisplay(items: ReadonlyArray<InventoryItem>) {
	return [...items].sort((left, right) => {
		const rarityDifference = rarityRank[right.rarity] - rarityRank[left.rarity];

		if (rarityDifference !== 0) {
			return rarityDifference;
		}

		return left.name.localeCompare(right.name);
	});
}

export function toItemCard(item: InventoryItem): ItemCardView {
	return {
		id: item.id,
		title: item.name,
		subtitle: `${item.rarity.toUpperCase()} x${abbreviateNumber(item.amount)}`,
		disabled: item.locked === true,
	};
}

export function filterUnlocked(items: ReadonlyArray<InventoryItem>) {
	return items.filter((item) => item.locked !== true);
}
