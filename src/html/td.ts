import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface Td extends IAttr {
	colspan?: number;
	headers?: string;
	rowspan?: number;
}

export class td extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Td);
	constructor(attr: Td, elem: IElem);
	constructor(...arg: any[]) {
		super("td", tagConsArg<Td>("elem", arg));
	}
}
