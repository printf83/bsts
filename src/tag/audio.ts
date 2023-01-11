import { IAttrAutoplay, IAttrControls, IAttrSrc } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { tag } from "./index.js";

export interface IAttrTagAudio extends IAttrSrc, IAttrAutoplay, IAttrControls {}

export class audio extends tag {
	constructor(public src: string, public attr?: IAttrTagAudio) {
		if (typeof attr !== "undefined") {
			attr = mergeObject(attr, { src: src });
		} else {
			attr = { src: src };
		}

		super("audio", undefined, attr);
	}
}
