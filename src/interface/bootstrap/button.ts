import { bootstrapType } from "../../core/bootstrap.js";
import { Button as TButton } from "../../html/button.js";

export interface Button extends Omit<TButton, "role"> {
	color?: bootstrapType.btnColor;
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
