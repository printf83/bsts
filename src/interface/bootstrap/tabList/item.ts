import { bootstrapType } from "../../../core/bootstrap.js";
import { a as HA } from "../../html/a.js";

export interface item extends HA {
	active?: boolean;
	action?: boolean;
	color?: bootstrapType.color;
	role?: "tab";
	autoInit?: boolean;
}
