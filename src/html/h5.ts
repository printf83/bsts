import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export class h5 extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("h5", tagConsArg("elem", arg));
	}
}
