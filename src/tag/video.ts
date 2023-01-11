import { IAttrAutoplay, IAttrControls, IAttrLoop, IAttrMuted, IAttrPoster, IAttrPreload, IAttrSrc } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { tag } from "./index.js";

export interface IAttrTagVideo extends IAttrSrc, IAttrAutoplay, IAttrControls, IAttrLoop, IAttrMuted,IAttrPoster,IAttrPreload {}

export class video extends tag {
	constructor(public src: string, public attr?: IAttrTagVideo) {
		if (typeof attr !== "undefined") {
			attr = mergeObject(attr, { src: src });
		} else {
			attr = { src: src };
		}

		super("video", undefined, attr);
	}
}
