import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";
import { optgroup, ITagOptgroup } from "./optgroup.js";
import { option, ITagOption } from "./option.js";

export interface ITagSelectItem extends ITagOption, ITagOptgroup {
	value?: string;
	label?: string;
	elem?: IElem;
	selected?: boolean;

	item?: ITagSelectItem | ITagSelectItem[];
}

export interface ITagSelect extends IAttr {
	autofocus?: boolean;
	disabled?: boolean;
	form?: string;
	multiple?: boolean;
	name?: string;
	required?: boolean;
	size?: number;

	item?: ITagSelectItem | ITagSelectItem[];
}

const convert = (attr: ITagSelect) => {
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
	constructor(elem: IElem);
	constructor(attr: ITagSelect);
	constructor(attr: ITagSelect, elem: IElem);
	constructor(...arg: any[]) {
		super("select", convert(tagConsArg<ITagSelect>("elem", arg)));
	}
}

export const Select = (AttrOrElem?: ITagSelect | IElem, Elem?: IElem) =>
	genTagClass<select, ITagSelect>(select, AttrOrElem, Elem);
