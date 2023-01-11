import { IAttrHref, IAttrHrefLang } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { tag } from "./index.js";

export interface IAttrTagLink extends IAttrHref, IAttrHrefLang {}

export class link extends tag {
	constructor(public href: string, public attr?: IAttrTagLink) {
		if (typeof attr !== "undefined") {
			attr = mergeObject(attr, { href: href });
		} else {
			attr = { href: href };
		}

		super("link", undefined, attr);
	}
}
