import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface ITagAudio extends IAttr {
	autoplay?: boolean;
	controls?: boolean;
	loop?: boolean;
	muted?: boolean;
	preload?: "auto" | "metadata" | "none";
	src?: string;
}

export class audio extends tag {
	constructor();
	constructor(attr: ITagAudio);
	constructor(elem: IElem);
	constructor(attr: ITagAudio, elem: IElem);

	constructor(...arg: any[]) {
		super("audio", tagConsArg("elem", arg));
	}
}

export const Audio = (AttrOrElem?: ITagAudio | IElem, Elem?: IElem) =>
	genTagClass<audio, ITagAudio>(audio, AttrOrElem, Elem);
