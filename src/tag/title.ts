import { IAttr, tag } from "../core/base/tag.js";

export type IElemTagTitle = string;

export interface IAttrTagTitle extends IAttr {
	elem?: IElemTagTitle;
}

export class title extends tag {
	constructor();
	constructor(elem: IElemTagTitle);
	constructor(attr: IAttrTagTitle);
	constructor(attr: IAttrTagTitle, elem: IElemTagTitle);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("title");
		} else if (arg.length === 1) {
			super("title", arg[0]);
		} else if (arg.length === 2) {
			super("title", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagTitle[]) => attrs.map((j) => new title(j));
}
