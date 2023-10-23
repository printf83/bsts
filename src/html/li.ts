import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { mergeClass } from "../core/util/mergeClass.js";
import { li as Li } from "../interface/html/li.js";

export class li extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Li);
	constructor(attr: Li, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("li", tagConstructor<Li>("elem", arg));
	}

	convert(attr: Li) {
		attr.class = mergeClass(attr.class, [attr.inline ? "list-inline-item" : undefined]);
		delete attr.inline;
		return super.convert(attr);
	}
}
