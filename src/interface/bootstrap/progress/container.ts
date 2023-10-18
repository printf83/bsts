import { attr } from "../../core/attr.js";
import { bsType } from "../../core/bsType.js";

export interface container extends attr {
	role?: "progressbar";
	value?: number;
	min?: number;
	max?: number;

	stacked?: boolean;
	color?: bsType.textBgColor;
	striped?: boolean;
	animated?: boolean;
	text?: "none" | "percent" | "progress" | string;
}
