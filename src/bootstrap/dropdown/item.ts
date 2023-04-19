import { genTagClass, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { a, ITagA } from "../../html/a.js";

export interface IBsDropdownItem extends ITagA {
	active?: boolean;
}

const convert = (attr: IBsDropdownItem) => {
	attr = mergeObject(
		{
			class: ["dropdown-item", attr.active ? "active" : undefined],
			aria: { current: attr.active ? "true" : undefined },
		},
		attr
	);

	delete attr.active;

	return attr;
};

export class item extends a {
	constructor(); //#1
	constructor(attr: IBsDropdownItem); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsDropdownItem, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsDropdownItem>("elem", arg)));
	}
}

export const Item = (AttrOrElem?: IBsDropdownItem | IElem, Elem?: IElem) =>
	genTagClass<item, IBsDropdownItem>(item, AttrOrElem, Elem);
