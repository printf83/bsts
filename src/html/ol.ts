import { tagConsArg, IElem, tag } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";
import { li } from "./li.js";
import { ol as Ol } from "../interface/html/ol.js";

const convert = (attr: Ol) => {
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

	return attr;
};

export class ol extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Ol);
	constructor(attr: Ol, elem: IElem);
	constructor(...arg: any[]) {
		super("ol", convert(tagConsArg<Ol>("elem", arg)));
	}
}
