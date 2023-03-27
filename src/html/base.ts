import { tagConsNoElemArg, IAttr, tag } from "../core/tag.js";

export interface IAttrTagBase extends IAttr {
	href?: string;
	target?: "_blank" | "_parent" | "_self" | "_top";
}

export class base extends tag {
	constructor();
	constructor(attr: IAttrTagBase);
	constructor(...arg: any[]) {
		super("base", tagConsNoElemArg<IAttrTagBase>(arg));
	}
}
