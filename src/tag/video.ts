import { IAttr, tag } from "../core/base/tag.js";
import { source } from "./source.js";
import { track } from "./track.js";

export type IElemTagVideo = source | track | string | (source | track | string)[];

export interface IAttrTagVideo extends IAttr {
	autoplay?: boolean;
	controls?: boolean;
	loop?: boolean;
	muted?: boolean;
	poster?: string;
	preload?: "auto" | "metadata" | "none";
	src?: string;

	elem?: IElemTagVideo;
}

export class video extends tag {
	constructor(); //#1
	constructor(src: string); //#2
	constructor(elem: IElemTagVideo); //#3
	constructor(attr: IAttrTagVideo); //#4
	constructor(attr: IAttrTagVideo, elem: IElemTagVideo); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("video");
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				super("video", { src: arg[0] } as IAttrTagVideo);
				// } else if (isAttr<IAttrTagVideo>(arg[0])) {
				// 	super("video", arg[0]);
			} else {
				super("video", arg[0]);
			}
		} else if (arg.length === 2) {
			super("video", arg[0], arg[1]);
		}
	}

	static gen = (attrs: IAttrTagVideo[]) => attrs.map((i) => new video(i));
}
