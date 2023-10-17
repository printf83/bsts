import { IAttr } from "../../core/tag.js";

export interface th extends IAttr {
	abbr?: string;
	colspan?: number;
	headers?: string;
	rowspan?: number;
	scope?: "col" | "colgroup" | "row" | "rowgroup";
}
