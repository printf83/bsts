import { IAttrHref, IAttrTarget } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { tag } from "./index.js";

export interface IAttrTagBase extends IAttrHref, IAttrTarget {}

export class base extends tag {
	constructor(public href: string, public attr?: IAttrTagBase) {
		if (typeof attr !== "undefined") {
			attr = mergeObject(attr, { href: href });
		} else {
			attr = { href: href };
		}

		super("base", attr);
	}
}
