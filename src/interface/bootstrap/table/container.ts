import { attr } from "../../core/attr.js";
import { bsType } from "../../core/bsType.js";
import { elem } from "../../core/elem.js";

export interface container extends attr {
	color?: bsType.color;
	striped?: "row" | "col";
	hoverable?: boolean;
	bordered?: boolean;
	small?: true;
	captionLocation?: "top" | "bottom";

	responsiveHeader?: string[];
	responsiveAttr?: string;
	responsiveCol?: string;
	responsiveColXs?: string;

	item?: (elem | elem[])[][];
}
