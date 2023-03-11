import { consProp, IAttr, IElem, tag } from "../core/base/tag.js";

export class b extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("b", consProp("elem", arg));
	}
}
