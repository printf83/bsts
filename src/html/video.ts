import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface ITagVideo extends IAttr {
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
	constructor(attr: ITagVideo); //#4
	constructor(attr: ITagVideo, elem: IElem); //#4
	constructor(...arg: any[]) {
		super("video", tagConsArg<ITagVideo>("elem", arg));
	}
}
