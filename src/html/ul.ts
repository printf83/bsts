import { tagConsArg, IElem, tag } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";
import { li } from "./li.js";
import { ul as Ul } from "../interface/html/ul.js";

const convert = (attr: Ul) => {
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

	return attr;
};

export class ul extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Ul);
	constructor(attr: Ul, elem: IElem);
	constructor(...arg: any[]) {
		super("ul", convert(tagConsArg<Ul>("elem", arg)));
	}
}
