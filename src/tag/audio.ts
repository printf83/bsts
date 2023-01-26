import { IAttr, tag } from "../core/base/tag.js";
import { source } from "./source.js";

export type IElemTagAudio = source | string | (source | string)[];

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
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("audio");
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				super("audio", { src: arg[0] } as IAttrTagAudio);
			} else {
				super("audio", arg[0]);
			}
		}
	}

	static gen = (attrs: IAttrTagAudio[]) => attrs.map((i) => new audio(i));
}
