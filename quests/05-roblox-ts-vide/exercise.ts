export type VideConcept = {
	readonly name: string;
	readonly meaning: string;
};

export const videConcepts: VideConcept[] = [
	{
		name: "source",
		meaning: "A reactive value that can be read and updated.",
	},
	{
		name: "derive",
		meaning: "A reactive value computed from another reactive value.",
	},
	{
		name: "props",
		meaning: "Typed inputs passed into a component.",
	},
	{
		name: "UI Labs",
		meaning: "The preview workflow for checking UI components in Roblox Studio.",
	},
];

export function explainConcept(name: string) {
	const concept = videConcepts.find((item) => item.name.toLowerCase() === name.toLowerCase());
	return concept?.meaning ?? "Unknown concept. Find an existing component and ask for help.";
}

export function shouldTouchRealUiRepo(passedQuests: number, canExplainVide: boolean) {
	return passedQuests >= 5 && canExplainVide;
}
