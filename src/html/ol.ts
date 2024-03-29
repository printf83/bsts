import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { mergeClass } from "../core/util/mergeClass.js";

import { li } from "./li.js";
import { ol as Ol } from "../interface/html/ol.js";

export class ol extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Ol);
	constructor(attr: Ol, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("ol", tagConstructor<Ol>("elem", arg));
	}

	convert(attr: Ol) {
		attr.class = mergeClass(attr.class, [
			attr.unstyle ? "list-unstyle" : undefined,
			attr.inline ? "list-inline" : undefined,
		]);

		if (attr.item && !attr.elem) {
			if (!Array.isArray(attr.item)) {
				attr.item = [attr.item];
			}

			attr.elem = attr.item.map((i) => {
				return new li(i);
			});
		}

		delete attr.unstyle;
		delete attr.inline;
		delete attr.item;
		return super.convert(attr);
	}
}
