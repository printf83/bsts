import { tagConsArg, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagTrack extends IAttr {
	default?: boolean;
	kind?: "captions" | "chapters" | "descriptions" | "metadata" | "subtitles";
	label?: string;
	src?: string;
	srclang?: string;
}

export class track extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagTrack);
	constructor(attr: IAttrTagTrack, elem: IElem);
	constructor(...arg: any[]) {
		super("track", tagConsArg<IAttrTagTrack>("elem", arg));
	}
}
