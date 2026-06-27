import { Players } from "@rbxts/services";
import Vide, { mount } from "@rbxts/vide";

import LessonButton from "./lesson_button";

const localPlayer = Players.LocalPlayer;
const playerGui = localPlayer.WaitForChild("PlayerGui");

mount(() => {
	return (
		<screengui Name={"MozKingLearning"} ResetOnSpawn={false}>
			<LessonButton label={"Buy VIP"} />
		</screengui>
	);
}, playerGui);
