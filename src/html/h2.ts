import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export class h2 extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("h2", tagConsArg("elem", arg));
	}
}
