import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";
import { option } from "./option.js";

export interface Datalist extends IAttr {
	item?: string | string[];
}

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
	constructor(elem: IElem);
	constructor(attr: Datalist);
	constructor(attr: Datalist, elem: IElem);
	constructor(...arg: any[]) {
		super("datalist", convert(tagConsArg<Datalist>("elem", arg)));
	}
}
