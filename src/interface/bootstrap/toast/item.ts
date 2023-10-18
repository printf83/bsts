import { bsType } from "../../core/bsType.js";
import { attr } from "../../core/attr.js";

export interface item extends attr {
	role?: "alert" | "status";
	live?: "assertive" | "polite";
	atomic?: boolean;
	autohide?: boolean;
	delay?: number;
	color?: bsType.color;
	animation?: boolean;
	debug?: boolean;
}
