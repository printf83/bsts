import { IAttr, tag } from "../core/attach/_index.js";
import { mergeObject } from "../core/fn/mergeObject.js";

export interface IAttrTagVideo extends IAttr {
	autoplay?: boolean;
	controls?: boolean;
	loop?: boolean;
	muted?: boolean;
	poster?: string;
	preload?: "auto" | "metadata" | "none";
	src?: string;
}

export class video extends tag {
	constructor();
	constructor(src: string);
	constructor(attr: IAttrTagVideo);
	constructor(src: string, attr: IAttrTagVideo);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("video");
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				super("video", { src: arg[0] } as IAttrTagVideo, undefined);
			} else {
				super("video", arg[0], undefined);
			}
		} else if (arg.length === 2) {
			super("video", mergeObject(arg[1], { src: arg[0] } as IAttrTagVideo), undefined);
		}
	}
}
