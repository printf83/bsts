import { a as HA } from "../../../html/a.js";

export interface link extends HA {
	role?: "tab" | "button";
	toggle?: "dropdown" | "pill" | "tab";
	active?: boolean;
	current?: true | "page";
	handleActive?: boolean;
}
