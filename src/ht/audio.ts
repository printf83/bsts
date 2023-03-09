import { IAttr, tag } from "../core/base/tag.js";
import { source } from "./source.js";
import { track } from "./track.js";

export type IElemTagAudio =
	| source
	| track
	| string
	| (source | track | string)[];

export interface IAttrTagAudio extends IAttr {
	autoplay?: boolean;
	controls?: boolean;
	loop?: boolean;
	muted?: boolean;
	preload?: "auto" | "metadata" | "none";
	src?: string;

	elem?: IElemTagAudio;
}

export class audio extends tag {
	constructor();
	constructor(src: string);
	constructor(attr: IAttrTagAudio);
	constructor(elem: IElemTagAudio);
	constructor(attr: IAttrTagAudio, elem: IElemTagAudio);

	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("audio");
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				super("audio", { src: arg[0] } as IAttrTagAudio);
			} else {
				super("audio", arg[0]);
			}
		} else if (arg.length === 2) {
			super("audio", arg[0], arg[1]);
		}
	}
}
