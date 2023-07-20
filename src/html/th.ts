import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface Th extends IAttr {
	abbr?: string;
	colspan?: number;
	headers?: string;
	rowspan?: number;
	scope?: "col" | "colgroup" | "row" | "rowgroup";
}

export class th extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Th);
	constructor(attr: Th, elem: IElem);
	constructor(...arg: any[]) {
		super("th", tagConsArg<Th>("elem", arg));
	}
}
