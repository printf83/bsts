import { IAttr, IElem, genTagClass } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/mergeClass.js";
import { div } from "../../../html/div.js";
import { IBsNavContentItem, item } from "./item.js";

export interface IBsNavContentContainer extends IAttr {
	item?: IBsNavContentItem | IBsNavContentItem[];
}

const convert = (attr: IBsNavContentContainer) => {
	attr.class = mergeClass(attr.class, "tab-content");

	if (attr.item && !attr.elem) {
		if (!Array.isArray(attr.item)) {
			attr.item = [attr.item];
		}

		attr.elem = attr.item.map((i) => {
			return new item(i);
		});
	}

	delete attr.item;
	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IBsNavContentContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsNavContentContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}

export const Container = (AttrOrElem?: IBsNavContentContainer | IElem, Elem?: IElem) =>
	genTagClass<container, IBsNavContentContainer>(container, AttrOrElem, Elem);
