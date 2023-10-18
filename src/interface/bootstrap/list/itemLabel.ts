import { bsType } from "../../core/bsType.js";
import { label as HLabel } from "../../html/label.js";

export interface itemLabel extends HLabel {
	active?: boolean;
	disabled?: boolean;
	action?: boolean;
	color?: bsType.color;
	handleActive?: boolean;
}
