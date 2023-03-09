import { cons, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagTd extends IAttr {
	colspan?: number;
	headers?: string;
	rowspan?: number;
}

export class td extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagTd);
	constructor(attr: IAttrTagTd, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("td");
		} else if (arg.length === 1) {
			super("td", arg[0]);
		} else if (arg.length === 2) {
			super("td", arg[0], arg[1]);
		}
	}
}
