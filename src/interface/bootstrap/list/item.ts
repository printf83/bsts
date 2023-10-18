import { bsType } from "../../core/bsType.js";
import { li as HLi } from "../../html/li.js";

export interface item extends HLi {
	active?: boolean;
	disabled?: boolean;
	action?: boolean;
	color?: bsType.color;
	handleActive?: boolean;
}
