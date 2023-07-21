import { tagConsNoElemArg, IAttr, tag } from "../core/tag.js";

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
