import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface ITagTrack extends IAttr {
	default?: boolean;
	kind?: "captions" | "chapters" | "descriptions" | "metadata" | "subtitles";
	label?: string;
	attrLabel?: string;
	src?: string;
	srclang?: string;
}

const convert = (attr: ITagTrack) => {
	if (attr.label) {
		attr.attrLabel = attr.label;
		delete attr.label;
	}

	return attr;
};

export class track extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagTrack);
	constructor(attr: ITagTrack, elem: IElem);
	constructor(...arg: any[]) {
		super("track", convert(tagConsArg<ITagTrack>("elem", arg)));
	}
}

export const Track = (AttrOrElem?: ITagTrack | IElem, Elem?: IElem) =>
	genTagClass<track, ITagTrack>(track, AttrOrElem, Elem);
