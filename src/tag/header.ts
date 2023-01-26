import { IAttr, IElem, tag } from "../core/base/tag.js";

export class header extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("header");
		} else if (arg.length === 1) {
			super("header", arg[0]);
		} else if (arg.length === 2) {
			super("header", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttr[]) => attrs.map((i) => new header(i));
}