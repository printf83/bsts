import { IAttr } from "../../core/tag.js";
export class small extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("small", tagConsArg("elem", arg));
	}
}
