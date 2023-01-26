import { IAttr, IElem, tag } from "../core/base/tag.js";
import { td } from "./td.js";
import { th } from "./th.js";

export interface IAttrTagTr extends IAttr {
	elem?: (td | th)[];
}

export class tr extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagTr);
	constructor(attr: IAttrTagTr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("tr");
		} else if (arg.length === 1) {
			super("tr", arg[0]);
		} else if (arg.length === 2) {
			super("tr", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagTr[]) => attrs.map((i) => new tr(i));
}
