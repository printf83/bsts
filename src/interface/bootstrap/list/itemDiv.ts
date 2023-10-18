import { bsType } from "../../core/bsType.js";
import { attr } from "../../core/attr.js";

export interface itemDiv extends attr {
	active?: boolean;
	disabled?: boolean;
	action?: boolean;
	color?: bsType.color;
	handleActive?: boolean;
}
