import { IAttr, IElem } from "../../core/tag.js";

export interface ul extends IAttr {
	unstyle?: boolean;
	inline?: boolean;
	item?: IElem;
}
