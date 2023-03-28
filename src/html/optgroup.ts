import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";
import { option } from "./option.js";

export interface IAttrTagOptgroupItem {
	value?: string;
	elem?: IElem;
	selected?: boolean;
}

export interface IAttrTagOptgroup extends IAttr {
	disabled?: boolean;
	label?: string;
	attrLabel?: string;

	list?: IAttrTagOptgroupItem | IAttrTagOptgroupItem[];
}

const convert = (attr: IAttrTagOptgroup) => {
	if (attr.label) {
		attr.attrLabel = attr.label;
		delete attr.label;
	}

	if (attr.list && !attr.elem) {
		if (!Array.isArray(attr.list)) {
			attr.list = [attr.list];
		}

		attr.elem = attr.list.map((i) => {
			return new option(i);
		});
	}

	delete attr.list;

	return attr;
};

export class optgroup extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagOptgroup);
	constructor(attr: IAttrTagOptgroup, elem: IElem);
	constructor(...arg: any[]) {
		super("optgroup", convert(tagConsArg<IAttrTagOptgroup>("elem", arg)));
	}
}
