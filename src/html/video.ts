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
	constructor();
	constructor(elem: IElem);
	constructor(attr: Video);
	constructor(attr: Video, elem: IElem);
	constructor(...arg: any[]) {
		super("video", tagConsArg<Video>("elem", arg));
	}
}

export const Video = (AttrOrElem?: Video | IElem, Elem?: IElem) => genTagClass<video, Video>(video, AttrOrElem, Elem);
