import { consProp, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagBdo extends IAttr {
	dir?: "ltr" | "rtl";
}

export class bdo extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagBdo);
	constructor(attr: IAttrTagBdo, elem: IElem);
	constructor(...arg: any[]) {
		super("bdo", consProp<IAttrTagBdo>("elem", arg));
	}
}
