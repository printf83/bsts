import { cons, IAttr, IElem, tag } from "../core/base/tag.js";

export class dl extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("dl", cons(arg));
	}
}
