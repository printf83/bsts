import { consNoElem, IAttr, tag } from "../core/base/tag.js";

export interface IAttrTagBase extends IAttr {
	href?: string;
	target?: "_blank" | "_parent" | "_self" | "_top";
}

export class base extends tag {
	constructor();
	constructor(attr: IAttrTagBase);
	constructor(...arg: any[]) {
		super("base", consNoElem<IAttrTagBase>(arg));
	}
}
