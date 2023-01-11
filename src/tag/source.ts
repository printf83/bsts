import { IAttrMedia, IAttrSizes, IAttrSrc, IAttrSrcset, IAttrType } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { tag } from "./index.js";

export interface IAttrTagSource extends IAttrMedia, IAttrSrc, IAttrSizes, IAttrSrcset, IAttrType {}

export class source extends tag {
	constructor(public src: string, public attr?: IAttrTagSource) {
		if (typeof attr !== "undefined") {
			attr = mergeObject(attr, { src: src });
		} else {
			attr = { src: src };
		}

		super("source", undefined, attr);
	}
}
