import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { mergeClass } from "../core/util/mergeClass.js";
import { abbr as Abbr } from "../interface/html/abbr.js";

export class abbr extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Abbr);
	constructor(attr: Abbr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("abbr", tagConstructor<Abbr>("elem", arg));
	}

	convert(attr: Abbr) {
		attr.class = mergeClass(attr.class, attr.small ? "initialism" : undefined);
		delete attr.small;
		return super.convert(attr);
	}
}
