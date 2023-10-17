import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export class h1 extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("h1", tagConsArg("elem", arg));
	}
}
