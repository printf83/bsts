import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export class address extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("address", tagConsArg("elem", arg));
	}
}
