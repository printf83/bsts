import { IAttrAsync, IAttrSrc } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { tag } from "./index.js";

export interface IAttrTagScript extends IAttrSrc, IAttrAsync {}

export class script extends tag {
	constructor(public src: string, public attr?: IAttrTagScript) {
		if (typeof attr !== "undefined") {
			attr = mergeObject(attr, { src: src });
		} else {
			attr = { src: src };
		}

		super("script", undefined, attr);
	}
}
