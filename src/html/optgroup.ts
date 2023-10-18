import { tagConsArg, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { option } from "./option.js";
import { optgroup as Optgroup } from "../interface/html/optgroup.js";

const convert = (attr: Optgroup) => {
	if (attr.label) {
		attr.attrLabel = attr.label;
		delete attr.label;
	}

	if (attr.item && !attr.elem) {
		if (!Array.isArray(attr.item)) {
			attr.item = [attr.item];
		}

		attr.elem = attr.item.map((i) => {
			return new option(i);
		});
	}

	delete attr.item;

	return attr;
};

export class optgroup extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Optgroup);
	constructor(attr: Optgroup, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("optgroup", convert(tagConsArg<Optgroup>("elem", arg)));
	}
}
