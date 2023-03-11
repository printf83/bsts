import { consProp, IAttr, IElem, tag } from "../core/base/tag.js";

export class article extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("article", consProp("elem", arg));
	}
}
