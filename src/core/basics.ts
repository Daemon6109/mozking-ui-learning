export type PlayerProfile = {
	readonly id: string;
	readonly name: string;
	readonly level: number;
	readonly gems: number;
	readonly completedTutorial: boolean;
};

export function greetPlayer(name: string) {
	return `Welcome, ${name}!`;
}

export function canEnterAdvancedStage(profile: PlayerProfile) {
	return profile.level >= 10 && profile.completedTutorial;
}

export function addGems(profile: PlayerProfile, gems: number): PlayerProfile {
	return {
		...profile,
		gems: profile.gems + gems,
	};
}

export function getHighestLevelPlayer(players: ReadonlyArray<PlayerProfile>) {
	return players.reduce<PlayerProfile | undefined>((highest, player) => {
		if (!highest || player.level > highest.level) {
			return player;
		}

		return highest;
	}, undefined);
}
