import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";
import { option, Option } from "./option.js";

export interface Optgroup extends IAttr {
	disabled?: boolean;
	label?: string;
	attrLabel?: string;

	item?: Option | Option[];
}

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
	constructor(elem: IElem);
	constructor(attr: Optgroup);
	constructor(attr: Optgroup, elem: IElem);
	constructor(...arg: any[]) {
		super("optgroup", convert(tagConsArg<Optgroup>("elem", arg)));
	}
}
