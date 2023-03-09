import { consProp, IAttr, tag } from "../core/base/tag.js";

export interface IAttrTagBase extends IAttr {
	href?: string;
	target?: "_blank" | "_parent" | "_self" | "_top";
}

export class base extends tag {
	constructor();
	constructor(href: string);
	constructor(attr: IAttrTagBase);
	constructor(attr: IAttrTagBase, href: string);
	constructor(...arg: any[]) {
		super("base", consProp<IAttrTagBase>("href", arg));
	}
}
