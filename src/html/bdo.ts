import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface Bdo extends IAttr {
	dir?: "ltr" | "rtl";
}

export class bdo extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Bdo);
	constructor(attr: Bdo, elem: IElem);
	constructor(...arg: any[]) {
		super("bdo", tagConsArg<Bdo>("elem", arg));
	}
}
