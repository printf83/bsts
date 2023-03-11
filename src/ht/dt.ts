import { consProp, IAttr, IElem, tag } from "../core/base/tag.js";

export class dt extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("dt", consProp("elem", arg));
	}
}
