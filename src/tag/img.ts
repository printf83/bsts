import { IAttrAlt, IAttrSrc } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { tag } from "./index.js";

export interface IAttrTagImg extends IAttrAlt, IAttrSrc {}

export class img extends tag {
	constructor(public src: string, public attr?: IAttrTagImg) {
		if (typeof attr !== "undefined") {
			attr = mergeObject(attr, { src: src });
		} else {
			attr = { src: src };
		}

		super("img", undefined, attr);
	}
}
