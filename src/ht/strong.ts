import { consProp, IAttr, IElem, tag } from "../core/base/tag.js";

export class strong extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("strong", consProp("elem", arg));
	}
}
