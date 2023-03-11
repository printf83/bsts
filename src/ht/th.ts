import { consProp, IAttr, IElem, tag } from "../core/base/tag.js";

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
		super("th", consProp<IAttrTagTh>("elem", arg));
	}
}
