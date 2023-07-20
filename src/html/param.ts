import { tagConsNoElemArg, IAttr, tag } from "../core/tag.js";

export interface Param extends IAttr {
	name?: string;
	value?: string;
}

export class param extends tag {
	constructor();
	constructor(attr: Param);
	constructor(...arg: any[]) {
		super("param", tagConsNoElemArg<Param>(arg));
	}
}
