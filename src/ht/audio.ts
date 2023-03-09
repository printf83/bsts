import { cons, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagAudio extends IAttr {
	autoplay?: boolean;
	controls?: boolean;
	loop?: boolean;
	muted?: boolean;
	preload?: "auto" | "metadata" | "none";
	src?: string;
}

export class audio extends tag {
	constructor();
	constructor(attr: IAttrTagAudio);
	constructor(elem: IElem);
	constructor(attr: IAttrTagAudio, elem: IElem);

	constructor(...arg: any[]) {
		super("audio", cons(arg));
	}
}
