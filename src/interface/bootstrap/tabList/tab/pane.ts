import { IAttr } from "../../../../core/tag.js";

export interface pane extends IAttr {
	animation?: boolean;
	active?: boolean;
	role?: "tabpanel";
}
