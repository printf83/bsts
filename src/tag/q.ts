import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagQ extends IAttr {
	cite?: string;
}

export class q extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagQ);
	constructor(attr: IAttrTagQ, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("q");
		} else if (arg.length === 1) {
			super("q", arg[0]);
		} else if (arg.length === 2) {
			super("q", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagQ[]) => attrs.map((i) => new q(i));
}
