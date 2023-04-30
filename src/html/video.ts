import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface Video extends IAttr {
	autoplay?: boolean;
	controls?: boolean;
	loop?: boolean;
	muted?: boolean;
	poster?: string;
	preload?: "auto" | "metadata" | "none";
	src?: string;
}

export class video extends tag {
	constructor(); //#1
	constructor(elem: IElem); //#3
	constructor(attr: Video); //#4
	constructor(attr: Video, elem: IElem); //#4
	constructor(...arg: any[]) {
		super("video", tagConsArg<Video>("elem", arg));
	}
}

export const Video = (AttrOrElem?: Video | IElem, Elem?: IElem) => genTagClass<video, Video>(video, AttrOrElem, Elem);
