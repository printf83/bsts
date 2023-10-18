import { bsType } from "../../core/bsType.js";
import { th as ITh } from "../../html/th.js";

export interface th extends ITh {
	color?: bsType.color;
	active?: boolean;

	responsiveAttr?: string;
	responsiveTitle?: string;
}
