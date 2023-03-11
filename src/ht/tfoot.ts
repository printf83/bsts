import { consProp, IAttr, IElem, tag } from "../core/base/tag.js";

export class tfoot extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("tfoot", consProp("elem", arg));
	}
}
