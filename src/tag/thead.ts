import { IAttr, tag } from "../core/base/tag.js";
import { tr } from "./tr.js";

export type IElemTagThead = tr | tr[];

export interface IAttrTagThead extends IAttr {
	elem?: IElemTagThead;
}

export class thead extends tag {
	constructor();
	constructor(elem: IElemTagThead);
	constructor(attr: IAttrTagThead);
	constructor(attr: IAttrTagThead, elem: IElemTagThead);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("thead");
		} else if (arg.length === 1) {
			super("thead", arg[0]);
		} else if (arg.length === 2) {
			super("thead", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagThead[]) => attrs.map((i) => new thead(i));
}
