import { button as HButton } from "../../../html/button.js";

export interface button extends HButton {
	role?: "tab" | "button";
	toggle?: "dropdown" | "pill" | "tab";
	target?: string;
	active?: boolean;
	handleActive?: boolean;
}
