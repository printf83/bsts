import { cons, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagOption extends IAttr {
	disabled?: boolean;
	selected?: boolean;
	value?: string;
}

export class option extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagOption);
	constructor(attr: IAttrTagOption, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("option");
		} else if (arg.length === 1) {
			super("option", arg[0]);
		} else if (arg.length === 2) {
			super("option", arg[0], arg[1]);
		}
	}
}
