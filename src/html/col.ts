import { tagConsNoElemArg, IAttr, tag, genTagClass } from "../core/tag.js";

export interface Col extends IAttr {
	span?: number;
}

export class col extends tag {
	constructor();
	constructor(attr: Col);
	constructor(...arg: any[]) {
		super("col", tagConsNoElemArg(arg));
	}
}

export const Col = (Attr?: Col) => genTagClass<col, Col>(col, Attr);
