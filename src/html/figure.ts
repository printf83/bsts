import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export class figure extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("figure", tagConsArg("elem", arg));
	}
}
