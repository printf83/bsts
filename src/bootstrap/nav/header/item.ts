import { IElem, genTagClass } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/mergeClass.js";
import { ITagLi, li } from "../../../html/li.js";

export interface IBsNavItem extends ITagLi {
	role?: "presentation";
	dropdown?: boolean;
}

const convert = (attr: IBsNavItem) => {
	attr.class = mergeClass(attr.class, ["nav-item", attr.dropdown ? "dropdown" : undefined]);

	delete attr.dropdown;

	return attr;
};

export class item extends li {
	constructor(); //#1
	constructor(attr: IBsNavItem); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsNavItem, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsNavItem>("elem", arg)));
	}
}

export const Item = (AttrOrElem?: IBsNavItem | IElem, Elem?: IElem) =>
	genTagClass<item, IBsNavItem>(item, AttrOrElem, Elem);
