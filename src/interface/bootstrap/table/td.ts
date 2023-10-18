import { bsType } from "../../core/bsType.js";
import { td as ITd } from "../../html/td.js";

export interface td extends ITd {
	color?: bsType.color;
	active?: boolean;

	responsiveAttr?: string;
	responsiveTitle?: string;
}
