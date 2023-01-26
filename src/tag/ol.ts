import { IAttr, tag } from "../core/base/tag.js";
import { li } from "./li.js";

export interface IAttrTagOl extends IAttr {
	reversed?: boolean;
	startValue?: number;

	elem?: li[];
}

export class ol extends tag {
	constructor();
	constructor(elem: li[]);
	constructor(attr: IAttrTagOl);
	constructor(attr: IAttrTagOl, elem: li[]);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("ol");
		} else if (arg.length === 1) {
			super("ol", arg[0]);
		} else if (arg.length === 2) {
			super("ol", arg[0], arg[1]);
		}
	}
}
