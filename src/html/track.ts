import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { track as Track } from "../interface/html/track.js";

export class track extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Track);
	constructor(attr: Track, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("track", tagConstructor<Track>("elem", arg));
	}

	convert(attr: Track) {
		if (attr.label) {
			attr.attrLabel = attr.label;
			delete attr.label;
		}
		return super.convert(attr);
	}
}
