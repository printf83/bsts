import { bootstrapType } from "../../../core/bootstrap.js";
import { li as HLi } from "../../html/li.js";

export interface item extends HLi {
	active?: boolean;
	disabled?: boolean;
	action?: boolean;
	color?: bootstrapType.color;
	handleActive?: boolean;
}
