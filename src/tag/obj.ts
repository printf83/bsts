import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagObj extends IAttr {
	dataText?: string;
	form?: string;
	name?: string;
	type?: string;
	typemustmatch?: boolean;
	usemap?: string;
}

export class obj extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagObj, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("object");
		} else if (arg.length === 1) {
			super("object", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("object", arg[0], arg[1]);
		}
	}
}
