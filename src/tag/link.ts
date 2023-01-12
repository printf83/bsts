import { IAttrHref, IAttrHrefLang, IAttrRel, IAttrSizes, IAttrType } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { tag } from "./index.js";

export interface IAttrTagLink extends IAttrHref, IAttrHrefLang, IAttrRel, IAttrSizes, IAttrType {}

export class link extends tag {
	constructor();
	constructor(href: string);
	constructor(attr: IAttrTagLink);
	constructor(href: string, attr: IAttrTagLink);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("link");
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				super("link", { href: arg[0] } as IAttrTagLink, undefined);
			} else {
				super("link", arg[0], undefined);
			}
		} else if (arg.length === 2) {
			super("link", mergeObject(arg[1], { href: arg[0] } as IAttrTagLink), undefined);
		}
	}
}
