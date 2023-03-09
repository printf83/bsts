import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagSelect extends IAttr {
	autofocus?: boolean;
	disabled?: boolean;
	form?: string;
	multiple?: boolean;
	name?: string;
	required?: boolean;
	size?: number;
}

export class select extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagSelect);
	constructor(attr: IAttrTagSelect, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("select");
		} else if (arg.length === 1) {
			super("select", arg[0]);
		} else if (arg.length === 2) {
			super("select", arg[0], arg[1]);
		}
	}
}
