import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export class h3 extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("h3", tagConsArg("elem", arg));
	}
}
