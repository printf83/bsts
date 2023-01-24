import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagOptgroup extends IAttr {
	disabled?: boolean;
	label?: string;
}

export class optgroup extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagOptgroup, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("optgroup");
		} else if (arg.length === 1) {
			super("optgroup", arg[0]);
		} else if (arg.length === 2) {
			super("optgroup", arg[0], arg[1]);
		}
	}
}
