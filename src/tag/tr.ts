import { IAttr, tag } from "../core/base/tag.js";
import { td } from "./td.js";
import { th } from "./th.js";

export type IElemTagTr = td | th | (td | th)[];

export interface IAttrTagTr extends IAttr {
	elem?: IElemTagTr;
}

export class tr extends tag {
	constructor();
	constructor(elem: IElemTagTr);
	constructor(attr: IAttrTagTr);
	constructor(attr: IAttrTagTr, elem: IElemTagTr);
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
