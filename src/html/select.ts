import { tagConsArg, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { optgroup } from "./optgroup.js";
import { option } from "./option.js";
import { select as Select } from "../interface/html/select.js";

const convert = (attr: Select) => {
	if (attr.item && !attr.elem) {
		if (!Array.isArray(attr.item)) {
			attr.item = [attr.item];
		}

		attr.elem = attr.item.map((i) => {
			i = Object.assign({}, i);
			if (i.label && i.item && !i.elem) {
				if (!Array.isArray(i.item)) {
					i.item = [i.item];
				}

				delete i.value;
				delete i.selected;

				return new optgroup(i);
			} else {
				delete i.label;
				delete i.item;

				return new option(i);
			}
		});
	}

	delete attr.item;

	return attr;
};

export class select extends tag {
	constructor();
	constructor(elem: elem);
	constructor(attr: Select);
	constructor(attr: Select, elem: elem);
	constructor(...arg: any[]) {
		super("select", convert(tagConsArg<Select>("elem", arg)));
	}
}
