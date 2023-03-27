import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export class s extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("s", tagConsArg("elem", arg));
	}
}
