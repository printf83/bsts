import { IAttr, IElem, tag } from "../core/base/tag.js";
import { tr } from "./tr.js";

export interface IAttrTagTfoot extends IAttr {
	elem?: tr[];
}

export class tfoot extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagTfoot);
	constructor(attr: IAttrTagTfoot, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("tfoot");
		} else if (arg.length === 1) {
			super("tfoot", arg[0]);
		} else if (arg.length === 2) {
			super("tfoot", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagTfoot[]) => attrs.map((i) => new tfoot(i));
}
