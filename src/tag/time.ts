import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagTime extends IAttr {
	datetime?: Date;
}

export class time extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagTime, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("time");
		} else if (arg.length === 1) {
			super("time", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("time", arg[0], arg[1]);
		}
	}
}
