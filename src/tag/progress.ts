import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagProgress extends IAttr {
	min?: number;
	max?: number;
	value?: number;
}

export class progress extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagProgress, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("progress");
		} else if (arg.length === 1) {
			super("progress", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("progress", arg[0], arg[1]);
		}
	}
}
