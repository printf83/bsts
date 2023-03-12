import { tagConsArg, IAttr, IElem, tag } from "../core/base/tag.js";

export class menu extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("menu", tagConsArg("elem", arg));
	}
}