import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagLi extends IAttr {
	value?: string;
}

export class li extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagLi);
	constructor(attr: IAttrTagLi, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("li");
		} else if (arg.length === 1) {
			super("li", arg[0]);
		} else if (arg.length === 2) {
			super("li", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagLi[]) => attrs.map((i) => new li(i));
}
