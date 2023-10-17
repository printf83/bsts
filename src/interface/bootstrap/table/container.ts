import { IAttr, tag, strHtml } from "../../../core/tag.js";
import { bootstrapType } from "../../../core/bootstrap.js";

export interface container extends IAttr {
	color?: bootstrapType.color;
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
