import { consProp, IAttr, IElem, tag } from "../core/base/tag.js";

export class u extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("u", consProp("elem", arg));
	}
}
