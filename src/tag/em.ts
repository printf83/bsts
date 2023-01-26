import { IAttr, IElem, tag } from "../core/base/tag.js";

export class em extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("em");
		} else if (arg.length === 1) {
			super("em", arg[0]);
		} else if (arg.length === 2) {
			super("em", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttr[]) => attrs.map((i) => new em(i));
}
