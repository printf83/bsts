import { IAttrAutoplay, IAttrControls, IAttrLoop, IAttrMuted, IAttrPreload, IAttrSrc } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { tag } from "./index.js";

export interface IAttrTagAudio extends IAttrSrc, IAttrAutoplay, IAttrControls, IAttrLoop, IAttrMuted, IAttrPreload {}

export class audio extends tag {
	constructor();
	constructor(src: string);
	constructor(attr: IAttrTagAudio);
	constructor(src: string, attr: IAttrTagAudio);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("audio");
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				super("audio", { src: arg[0] } as IAttrTagAudio, undefined);
			} else {
				super("audio", arg[0], undefined);
			}
		} else if (arg.length === 2) {
			super("audio", mergeObject(arg[1], { src: arg[0] } as IAttrTagAudio), undefined);
		}
	}
}
