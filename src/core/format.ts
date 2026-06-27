export function abbreviateNumber(value: number) {
	if (value >= 1_000_000) {
		return `${trimDecimal(value / 1_000_000)}m`;
	}

	if (value >= 1_000) {
		return `${trimDecimal(value / 1_000)}k`;
	}

	return `${value}`;
}

export function formatTimer(seconds: number) {
	const safeSeconds = Math.max(0, Math.floor(seconds));
	const minutes = Math.floor(safeSeconds / 60);
	const remainingSeconds = safeSeconds % 60;

	return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function trimDecimal(value: number) {
	const rounded = Math.round(value * 10) / 10;
	return Number.isInteger(rounded) ? `${rounded}` : `${rounded}`;
}
