import { consNoElem, IAttr, tag } from "../core/base/tag.js";

export interface IAttrTagCol extends IAttr {
	span?: number;
}

export class col extends tag {
	constructor();
	constructor(attr: IAttrTagCol);
	constructor(...arg: any[]) {
		super("col", consNoElem(arg));
	}
}
