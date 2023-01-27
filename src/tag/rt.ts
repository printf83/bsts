import { IAttr, IElem, tag } from "../core/base/tag.js";

export class rt extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("rt");
		} else if (arg.length === 1) {
			super("rt", arg[0]);
		} else if (arg.length === 2) {
			super("rt", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttr[]) => attrs.map((i) => new rt(i));
}
