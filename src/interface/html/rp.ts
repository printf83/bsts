import { IAttr } from "../../core/tag.js";
export class rp extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("rp", tagConsArg("elem", arg));
	}
}
