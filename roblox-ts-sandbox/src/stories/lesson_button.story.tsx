import { CreateVideStory } from "@rbxts/ui-labs";
import Vide from "@rbxts/vide";

const controls = {
	label: "Buy VIP",
};

export = CreateVideStory(
	{
		name: "Learning/Lesson Button",
		summary: "Small Vide button used for roblox-ts onboarding.",
		vide: Vide,
		controls,
	},
	(storyProps) => {
		return (
			<textbutton
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromRGB(32, 120, 255)}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={UDim2.fromOffset(220, 64)}
				Text={tostring(storyProps.controls.label())}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextSize={24}
			>
				<uicorner CornerRadius={new UDim(0, 8)} />
			</textbutton>
		);
	},
);
