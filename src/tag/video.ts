import { IAttr, tag } from "../core/base/tag.js";

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
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("video");
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				super("video", { src: arg[0] } as IAttrTagVideo);
			} else {
				super("video", arg[0]);
			}
		}
	}

	static gen = (attrs: IAttrTagVideo[]) => attrs.map((i) => new video(i));
}
