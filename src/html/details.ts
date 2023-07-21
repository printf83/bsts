import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface Details extends IAttr {
	open?: boolean;
}

export class details extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Details);
	constructor(attr: Details, elem: IElem);
	constructor(...arg: any[]) {
		super("details", tagConsArg<Details>("elem", arg));
	}
}
