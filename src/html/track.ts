import { tagConsArg, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagTrack extends IAttr {
	default?: boolean;
	kind?: "captions" | "chapters" | "descriptions" | "metadata" | "subtitles";
	label?: string;
	attrLabel?: string;
	src?: string;
	srclang?: string;
}

const convert = (attr: IAttrTagTrack) => {
	if (attr.label) {
		attr.attrLabel = attr.label;
		delete attr.label;
	}

	return attr;
};

export class track extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagTrack);
	constructor(attr: IAttrTagTrack, elem: IElem);
	constructor(...arg: any[]) {
		super("track", convert(tagConsArg<IAttrTagTrack>("elem", arg)));
	}
}
