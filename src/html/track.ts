import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface Track extends IAttr {
	default?: boolean;
	kind?: "captions" | "chapters" | "descriptions" | "metadata" | "subtitles";
	label?: string;
	attrLabel?: string;
	src?: string;
	srclang?: string;
}

const convert = (attr: Track) => {
	if (attr.label) {
		attr.attrLabel = attr.label;
		delete attr.label;
	}

	return attr;
};

export class track extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Track);
	constructor(attr: Track, elem: IElem);
	constructor(...arg: any[]) {
		super("track", convert(tagConsArg<Track>("elem", arg)));
	}
}
