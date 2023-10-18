import { attr } from "../core/attr.js";
import { bsType } from "../core/bsType.js";

export interface spinner extends attr {
	type?: "border" | "grow";
	small?: true;
	role?: "status";
	color?: bsType.textColor;
}
