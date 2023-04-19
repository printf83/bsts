import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface ITagBdo extends IAttr {
	dir?: "ltr" | "rtl";
}

export class bdo extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagBdo);
	constructor(attr: ITagBdo, elem: IElem);
	constructor(...arg: any[]) {
		super("bdo", tagConsArg<ITagBdo>("elem", arg));
	}
}
