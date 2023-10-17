import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export class h4 extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("h4", tagConsArg("elem", arg));
	}
}
