import { tag, strHtml } from "../../../core/tag.js";
import { attr } from "../../core/attr.js";
import { bsType } from "../../core/bsType.js";

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

	item?: (string | tag | strHtml | (string | tag | strHtml)[])[][];
}
