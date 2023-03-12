import { tagConsArg, IAttr, IElem, tag } from "../core/base/tag.js";

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
	constructor(); //#1
	constructor(elem: IElem); //#3
	constructor(attr: IAttrTagVideo); //#4
	constructor(attr: IAttrTagVideo, elem: IElem); //#4
	constructor(...arg: any[]) {
		super("video", tagConsArg<IAttrTagVideo>("elem", arg));
	}
}
