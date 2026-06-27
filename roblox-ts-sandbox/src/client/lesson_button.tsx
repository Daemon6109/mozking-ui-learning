import Vide, { derive, source } from "@rbxts/vide";

type LessonButtonProps = {
	readonly label: string;
};

export default function LessonButton({ label }: LessonButtonProps) {
	const clicked = source(false);
	const text = derive(() => (clicked() ? "Clicked" : label));

	return (
		<textbutton
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundColor3={Color3.fromRGB(32, 120, 255)}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromOffset(220, 64)}
			Text={text}
			TextColor3={Color3.fromRGB(255, 255, 255)}
			TextSize={24}
			MouseButton1Click={() => clicked(true)}
		>
			<uicorner CornerRadius={new UDim(0, 8)} />
		</textbutton>
	);
}
