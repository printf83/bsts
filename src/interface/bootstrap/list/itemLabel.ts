import { bootstrapType } from "../../../core/bootstrap.js";
import { label as HLabel } from "../../html/label.js";

export interface itemLabel extends HLabel {
	active?: boolean;
	disabled?: boolean;
	action?: boolean;
	color?: bootstrapType.color;
	handleActive?: boolean;
}
