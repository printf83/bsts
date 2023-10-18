import { bsType } from "../../core/bsType.js";
import { a as HA } from "../../html/a.js";

export interface item extends HA {
	active?: boolean;
	action?: boolean;
	color?: bsType.color;
	role?: "tab";
	autoInit?: boolean;
}
