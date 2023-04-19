import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface ITagTd extends IAttr {
	colspan?: number;
	headers?: string;
	rowspan?: number;
}

export class td extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagTd);
	constructor(attr: ITagTd, elem: IElem);
	constructor(...arg: any[]) {
		super("td", tagConsArg<ITagTd>("elem", arg));
	}
}
