import { bootstrapType } from "../../../core/bootstrap.js";
import { a as HA } from "../../html/a.js";

export interface itemLink extends HA {
	active?: boolean;
	disabled?: boolean;
	action?: boolean;
	color?: bootstrapType.color;
	handleActive?: boolean;
}
