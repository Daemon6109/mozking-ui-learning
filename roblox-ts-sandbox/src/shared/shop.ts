export type ShopItem = {
	readonly id: string;
	readonly name: string;
	readonly price: number;
	readonly owned: boolean;
};

export type ShopButtonView = {
	readonly text: string;
	readonly enabled: boolean;
};

export function createShopButton(item: ShopItem, gems: number): ShopButtonView {
	if (item.owned) {
		return {
			text: "Owned",
			enabled: false,
		};
	}

	if (gems < item.price) {
		return {
			text: `Need ${item.price - gems} gems`,
			enabled: false,
		};
	}

	return {
		text: `Buy ${item.name}`,
		enabled: true,
	};
}
