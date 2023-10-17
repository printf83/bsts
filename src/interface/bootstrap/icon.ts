import { IAttr } from "../../core/tag.js";

export type iconType = "bi";

export interface icon extends IAttr {
	id?: string;
	type?: iconType;
	handleBubble?: boolean;
}
