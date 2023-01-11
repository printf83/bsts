import { IAttrName, IAttrSandbox, IAttrSrc, IAttrSrcdoc } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { tag } from "./index.js";

export interface IAttrTagIframe extends IAttrName, IAttrSrc,IAttrSandbox,IAttrSrcdoc {}

export class iframe extends tag {
	constructor(public src: string, public attr?: IAttrTagIframe) {
		if (typeof attr !== "undefined") {
			attr = mergeObject(attr, { src: src });
		} else {
			attr = { src: src };
		}

		super("iframe", undefined, attr);
	}
}
