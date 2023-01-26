import { IAttr, IElem, tag } from "../core/base/tag.js";

export class samp extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("samp");
		} else if (arg.length === 1) {
			super("samp", arg[0]);
		} else if (arg.length === 2) {
			super("samp", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttr[]) => attrs.map((i) => new samp(i));
}
