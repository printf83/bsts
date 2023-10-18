import { bsType } from "../../core/bsType.js";
import { a as HA } from "../../html/a.js";

export interface itemLink extends HA {
	active?: boolean;
	disabled?: boolean;
	action?: boolean;
	color?: bsType.color;
	handleActive?: boolean;
}
