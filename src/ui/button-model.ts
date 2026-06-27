export type ButtonState = {
	readonly label: string;
	readonly enabled: boolean;
	readonly reason?: string;
};

export type PurchaseInput = {
	readonly itemName: string;
	readonly price: number;
	readonly gems: number;
	readonly owned: boolean;
};

export function createPurchaseButton(input: PurchaseInput): ButtonState {
	if (input.owned) {
		return {
			label: "Owned",
			enabled: false,
			reason: "Player already owns this item.",
		};
	}

	if (input.gems < input.price) {
		return {
			label: `Need ${input.price - input.gems} more`,
			enabled: false,
			reason: "Not enough gems.",
		};
	}

	return {
		label: `Buy ${input.itemName}`,
		enabled: true,
	};
}
