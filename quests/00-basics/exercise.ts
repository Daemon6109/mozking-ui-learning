export const playerName = "MozKing";
export const startingGems = 100;
export const tutorialFinished = false;

export function greet(name: string) {
	return `Hello, ${name}`;
}

export function addGems(currentGems: number, gemsToAdd: number) {
	return currentGems + gemsToAdd;
}

export function double(value: number) {
	return value * 2;
}

export function canOpenMenu(isTutorialFinished: boolean) {
	return isTutorialFinished;
}
