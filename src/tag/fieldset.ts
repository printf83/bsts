import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagFieldset extends IAttr {
	disabled?: boolean;
	form?: string;
	name?: string;
}

export class fieldset extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagFieldset, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("fieldset");
		} else if (arg.length === 1) {
			super("fieldset", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("fieldset", arg[0], arg[1]);
		}
	}
}
