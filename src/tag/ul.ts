import { IAttr, tag } from "../core/base/tag.js";
import { li } from "./li.js";

export interface IAttrTagUl extends IAttr {
	elem?: li[];
}

export class ul extends tag {
	constructor();
	constructor(elem: li[]);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: li[]);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("ul");
		} else if (arg.length === 1) {
			super("ul", arg[0]);
		} else if (arg.length === 2) {
			super("ul", arg[0], arg[1]);
		}
	}
}
