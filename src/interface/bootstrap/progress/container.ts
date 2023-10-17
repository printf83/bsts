import { IAttr } from "../../../core/tag.js";
import { bootstrapType } from "../../../core/bootstrap.js";

export interface container extends IAttr {
	role?: "progressbar";
	value?: number;
	min?: number;
	max?: number;

	stacked?: boolean;
	color?: bootstrapType.textBgColor;
	striped?: boolean;
	animated?: boolean;
	text?: "none" | "percent" | "progress" | string;
}
