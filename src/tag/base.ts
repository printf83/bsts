import { IAttr, tag } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";

export interface IAttrTagBase extends IAttr {
	href?: string;
	target?: "_blank" | "_parent" | "_self" | "_top";
}

export class base extends tag {
	constructor();
	constructor(href: string);
	constructor(attr: IAttrTagBase);
	constructor(href: string, attr: IAttrTagBase);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("base");
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				super("base", { href: arg[0] } as IAttrTagBase);
			} else {
				super("base", arg[0]);
			}
		} else if (arg.length === 2) {
			super("base", mergeObject(arg[1], { href: arg[0] } as IAttrTagBase));
		}
	}
}
