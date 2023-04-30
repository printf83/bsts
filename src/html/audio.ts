import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface Audio extends IAttr {
	autoplay?: boolean;
	controls?: boolean;
	loop?: boolean;
	muted?: boolean;
	preload?: "auto" | "metadata" | "none";
	src?: string;
}

export class audio extends tag {
	constructor();
	constructor(attr: Audio);
	constructor(elem: IElem);
	constructor(attr: Audio, elem: IElem);

	constructor(...arg: any[]) {
		super("audio", tagConsArg("elem", arg));
	}
}

export const Audio = (AttrOrElem?: Audio | IElem, Elem?: IElem) => genTagClass<audio, Audio>(audio, AttrOrElem, Elem);
