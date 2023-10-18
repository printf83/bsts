import { bsType } from "../../core/bsType.js";
import { attr } from "../../core/attr.js";

export interface bar extends attr {
	color?: bsType.color;
	striped?: boolean;
	animated?: boolean;
}
