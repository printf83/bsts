import { IAttr, IElem } from "../../core/tag.js";

export interface ol extends IAttr {
	unstyle?: boolean;
	inline?: boolean;
	reversed?: boolean;
	startValue?: number;

	item?: IElem;
}
