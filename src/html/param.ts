import { tagConsNoElemArg, IAttr, tag, genTagClass } from "../core/tag.js";

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

export const Param = (Attr?: Param) => genTagClass<param, Param>(param, Attr);
