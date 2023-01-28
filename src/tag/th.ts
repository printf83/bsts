import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagTh extends IAttr {
	abbr?: string;
	colspan?: number;
	headers?: string;
	rowspan?: number;
	scope?: "col" | "colgroup" | "row" | "rowgroup";
}

export class th extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagTh);
	constructor(attr: IAttrTagTh, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("th");
		} else if (arg.length === 1) {
			super("th", arg[0]);
		} else if (arg.length === 2) {
			super("th", arg[0], arg[1]);
		}
	}
}
