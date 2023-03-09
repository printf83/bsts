import { consNoElem, IAttr, tag } from "../core/base/tag.js";

export class br extends tag {
	constructor();
	constructor(attr: IAttr);
	constructor(...arg: any[]) {
		super("br", consNoElem(arg));
	}
}
