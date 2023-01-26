import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagBlockquote extends IAttr {
	cite?: string;
}

export class blockquote extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagBlockquote);
	constructor(attr: IAttrTagBlockquote, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("blockquote");
		} else if (arg.length === 1) {
			super("blockquote", arg[0]);
		} else if (arg.length === 2) {
			super("blockquote", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagBlockquote[]) => attrs.map((i) => new blockquote(i));
}
