import { tagConsArg, IElem, tag } from "../core/tag.js";
import { track as Track } from "../interface/html/track.js";

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
