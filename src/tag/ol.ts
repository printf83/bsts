import { IAttr, tag } from "../core/base/tag.js";
import { li } from "./li.js";

export type IElemTagOl = li | li[];

export interface IAttrTagOl extends IAttr {
	reversed?: boolean;
	startValue?: number;

	elem?: IElemTagOl;
}

export class ol extends tag {
	constructor();
	constructor(elem: IElemTagOl);
	constructor(attr: IAttrTagOl);
	constructor(attr: IAttrTagOl, elem: IElemTagOl);
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
