import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { mergeClass } from "../core/util/mergeClass.js";

import { p as P } from "../interface/html/p.js";

const convert = (attr: P) => {
	attr.class = mergeClass(attr.class, attr.lead ? "lead" : undefined);
	delete attr.lead;
	return attr;
};

export class p extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: P);
	constructor(attr: P, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("p", convert(tagConstructor<P>("elem", arg)));
	}
}
