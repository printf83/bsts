import { IAttrSrc, IAttrType } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { tag } from "./index.js";

export interface IAttrTagEmbed extends IAttrSrc, IAttrType {}

export class embed extends tag {
	constructor(public type: string, public src: string, public attr?: IAttrTagEmbed) {
		if (typeof attr !== "undefined") {
			attr = mergeObject(attr, { type: type, src: src });
		} else {
			attr = { type: type, src: src };
		}

		super("embed", attr);
	}
}
