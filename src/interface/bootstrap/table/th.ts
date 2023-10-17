import { bootstrapType } from "../../../core/bootstrap.js";
import { th as ITh } from "../../html/th.js";

export interface th extends ITh {
	color?: bootstrapType.color;
	active?: boolean;

	responsiveAttr?: string;
	responsiveTitle?: string;
}
