import { IAttr, tag } from "../core/base/tag.js";
import { li } from "./li.js";

export type IElemTagUl = li | li[];

export interface IAttrTagUl extends IAttr {
	elem?: IElemTagUl;
}

export class ul extends tag {
	constructor();
	constructor(elem: IElemTagUl);
	constructor(attr: IAttrTagUl);
	constructor(attr: IAttrTagUl, elem: IElemTagUl);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("ul");
		} else if (arg.length === 1) {
			super("ul", arg[0]);
		} else if (arg.length === 2) {
			super("ul", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagUl[]) => attrs.map((i) => new ul(i));
}
