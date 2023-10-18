import { tagConsArg, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { option } from "./option.js";
import { datalist as Datalist } from "../interface/html/datalist.js";

const convert = (attr: Datalist) => {
	if (attr.item && !attr.elem) {
		if (!Array.isArray(attr.item)) {
			attr.item = [attr.item];
		}

		attr.elem = attr.item.map((i) => {
			return new option({ value: i });
		});
	}

	delete attr.item;

	return attr;
};

export class datalist extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Datalist);
	constructor(attr: Datalist, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("datalist", convert(tagConsArg<Datalist>("elem", arg)));
	}
}
