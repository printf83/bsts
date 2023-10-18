import { attr } from "../../core/attr.js";
import { bsType } from "../../core/bsType.js";

export interface tr extends attr {
	color?: bsType.color;
	active?: boolean;
}
