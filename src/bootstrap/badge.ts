import { bsConstructor } from "../core/bootstrap.js";
import { mergeClass } from "../core/util/mergeClass.js";

import { span } from "../html/span.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

const convert = (attr: attr) => {
	attr.class = mergeClass(attr.class, "badge");
	return attr;
};

export class badge extends span {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstructor("elem", arg)));
	}

	convert(attr: attr) {
		return super.convert(attr);
	}
}
