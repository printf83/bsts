import { IAttr, tag } from "../core/base/tag.js";
import { tr } from "./tr.js";

export type IElemTagTfoot = tr | tr[];

export interface IAttrTagTfoot extends IAttr {
	elem?: IElemTagTfoot;
}

export class tfoot extends tag {
	constructor();
	constructor(elem: IElemTagTfoot);
	constructor(attr: IAttrTagTfoot);
	constructor(attr: IAttrTagTfoot, elem: IElemTagTfoot);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("tfoot");
		} else if (arg.length === 1) {
			super("tfoot", arg[0]);
		} else if (arg.length === 2) {
			super("tfoot", arg[0], arg[1]);
		}
	}
}
