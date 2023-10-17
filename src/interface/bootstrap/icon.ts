import { IAttr } from "../../core/tag.js";

type IAttrIconType = "bi";

export interface Icon extends IAttr {
	id?: string;
	type?: IAttrIconType;
	handleBubble?: boolean;
}
