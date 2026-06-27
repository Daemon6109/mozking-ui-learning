import { abbreviateNumber } from "../../src/core/format";

export type ShopItem = {
	readonly id: string;
	readonly name: string;
	readonly price: number;
	readonly owned: boolean;
};

export type ShopCard = {
	readonly id: string;
	readonly title: string;
	readonly priceText: string;
	readonly buttonText: string;
	readonly canBuy: boolean;
};

export function createShopCard(item: ShopItem, gems: number): ShopCard {
	if (item.owned) {
		return {
			id: item.id,
			title: item.name,
			priceText: `${abbreviateNumber(item.price)} gems`,
			buttonText: "Owned",
			canBuy: false,
		};
	}

	const canBuy = gems >= item.price;

	return {
		id: item.id,
		title: item.name,
		priceText: `${abbreviateNumber(item.price)} gems`,
		buttonText: canBuy ? "Buy" : "Not enough gems",
		canBuy,
	};
}
