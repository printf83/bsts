import { tagConsArg, IAttr, IElem, tag } from "../core/base/tag.js";

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
		super("td", tagConsArg<IAttrTagTd>("elem", arg));
	}
}
