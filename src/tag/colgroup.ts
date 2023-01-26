import { IAttr, tag } from "../core/base/tag.js";
import { col } from "./col.js";

export type IElemTagColgroup = col | col[];

export interface IAttrTagColgroup extends IAttr {
	span?: number;
	elem?: IElemTagColgroup;
}

export class colgroup extends tag {
	constructor();
	constructor(elem: IElemTagColgroup);
	constructor(attr: IAttrTagColgroup);
	constructor(attr: IAttrTagColgroup, elem: IElemTagColgroup);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("colgroup");
		} else if (arg.length === 1) {
			super("colgroup", arg[0]);
		} else if (arg.length === 2) {
			super("colgroup", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagColgroup[]) => attrs.map((i) => new colgroup(i));
}
