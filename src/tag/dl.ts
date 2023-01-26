import { IAttr, tag } from "../core/base/tag.js";
import { dd } from "./dd.js";
import { dt } from "./dt.js";

export type IElemTagDl = dt | dd | (dt | dd)[];

export interface IAttrTagDl extends IAttr {
	elem?: IElemTagDl;
}

export class dl extends tag {
	constructor();
	constructor(elem: IElemTagDl);
	constructor(attr: IAttrTagDl);
	constructor(attr: IAttrTagDl, elem: IElemTagDl);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("dl");
		} else if (arg.length === 1) {
			super("dl", arg[0]);
		} else if (arg.length === 2) {
			super("dl", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagDl[]) => attrs.map((i) => new dl(i));
}
