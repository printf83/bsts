import { tagConsArg, IAttr, IElem, tag } from "../core/base/tag.js";

export class caption extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("caption", tagConsArg("elem", arg));
	}
}