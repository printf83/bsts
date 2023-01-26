import { IAttr, IElem, tag } from "../core/base/tag.js";
import { tr } from "./tr.js";

export interface IAttrTagTbody extends IAttr {
	elem?: tr[];
}

export class tbody extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagTbody);
	constructor(attr: IAttrTagTbody, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("tbody");
		} else if (arg.length === 1) {
			super("tbody", arg[0]);
		} else if (arg.length === 2) {
			super("tbody", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagTbody[]) => attrs.map((i) => new tbody(i));
}
