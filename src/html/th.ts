import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface ITagTh extends IAttr {
	abbr?: string;
	colspan?: number;
	headers?: string;
	rowspan?: number;
	scope?: "col" | "colgroup" | "row" | "rowgroup";
}

export class th extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagTh);
	constructor(attr: ITagTh, elem: IElem);
	constructor(...arg: any[]) {
		super("th", tagConsArg<ITagTh>("elem", arg));
	}
}
