import { IAttr } from "../../../../core/tag.js";

export interface item extends IAttr {
	active?: boolean;
	role?: "tabpanel";
	labelledby?: string;
	tabindex?: string | number;
	animation?: boolean;
}
