import { bsType } from "../../core/bsType.js";
import { attr } from "../../core/attr.js";

export interface container extends attr {
	textColorRGB?: string;
	expand?: bsType.viewport;
}
