import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { option } from "./option.js";
import { datalist as Datalist } from "../interface/html/datalist.js";

/**
 * datalist HTML element class which extends the tag class.
 * Allows constructing a datalist element with various configurations of attributes and child elements.
 * Handles converting a datalist configuration object with an item array into actual option child elements.
 */
export class datalist extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Datalist);
	constructor(attr: Datalist, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("datalist", tagConstructor<Datalist>("elem", arg));
	}

	convert(attr: Datalist) {
		if (attr.item && !attr.elem) {
			if (!Array.isArray(attr.item)) {
				attr.item = [attr.item];
			}

			attr.elem = attr.item.map((i) => {
				return new option({ value: i });
			});
		}

		delete attr.item;
		return super.convert(attr);
	}
}
