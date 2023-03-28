import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";
import { optgroup, IAttrTagOptgroup } from "./optgroup.js";
import { option, IAttrTagOption } from "./option.js";

export interface IAttrTagSelectItem extends IAttrTagOption, IAttrTagOptgroup {
	value?: string;
	label?: string;
	elem?: IElem;
	selected?: boolean;

	item?: IAttrTagSelectItem | IAttrTagSelectItem[];
}

export interface IAttrTagSelect extends IAttr {
	autofocus?: boolean;
	disabled?: boolean;
	form?: string;
	multiple?: boolean;
	name?: string;
	required?: boolean;
	size?: number;

	list?: IAttrTagSelectItem | IAttrTagSelectItem[];
}

const convert = (attr: IAttrTagSelect) => {
	if (attr.list && !attr.elem) {
		if (!Array.isArray(attr.list)) {
			attr.list = [attr.list];
		}

		attr.elem = attr.list.map((i) => {
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

	delete attr.list;

	return attr;
};

export class select extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagSelect);
	constructor(attr: IAttrTagSelect, elem: IElem);
	constructor(...arg: any[]) {
		super("select", convert(tagConsArg<IAttrTagSelect>("elem", arg)));
	}
}
