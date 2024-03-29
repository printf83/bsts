import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { mergeClass } from "../core/util/mergeClass.js";
import { li } from "./li.js";
import { ul as Ul } from "../interface/html/ul.js";

export class ul extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Ul);
	constructor(attr: Ul, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("ul", tagConstructor<Ul>("elem", arg));
	}

	convert(attr: Ul) {
		attr.class = mergeClass(attr.class, [
			attr.unstyle ? "list-unstyled" : undefined,
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
