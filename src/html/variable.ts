import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export class variable extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("var", tagConsArg("elem", arg));
	}
}
