import { IAttr, tag } from "../core/base/tag.js";
import { tr } from "./tr.js";

export type IElemTagTbody = tr | tr[];

export interface IAttrTagTbody extends IAttr {
	elem?: IElemTagTbody;
}

export class tbody extends tag {
	constructor();
	constructor(elem: IElemTagTbody);
	constructor(attr: IAttrTagTbody);
	constructor(attr: IAttrTagTbody, elem: IElemTagTbody);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("tbody");
		} else if (arg.length === 1) {
			super("tbody", arg[0]);
		} else if (arg.length === 2) {
			super("tbody", arg[0], arg[1]);
		}
	}
}
