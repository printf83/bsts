import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagBdo extends IAttr {
	dir?: "ltr" | "rtl";
}

export class bdo extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagBdo);
	constructor(attr: IAttrTagBdo, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("bdo");
		} else if (arg.length === 1) {
			super("bdo", arg[0]);
		} else if (arg.length === 2) {
			super("bdo", arg[0], arg[1]);
		}
	}
}
