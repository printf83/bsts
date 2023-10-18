import { bsType } from "../core/bsType.js";
import { button as HButton } from "../html/button.js";

export interface button extends Omit<HButton, "role"> {
	color?: bsType.btnColor;
	outline?: boolean;
	dismiss?: "modal" | "alert" | "offcanvas" | "toast";
	weight?: "lg" | "sm";
	toggle?: true | "button" | "tab" | "modal";
	href?: string;
	role?: "button" | "tab";
	target?: string;
	stretched?: boolean;

	active?: boolean;
	defColor?: boolean;
}
