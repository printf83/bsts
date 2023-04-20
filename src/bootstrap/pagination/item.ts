import { IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { ITagLi, li } from "../../html/li.js";
import { span } from "../../html/span.js";
import { a } from "../../html/a.js";
import { mergeClass } from "../../core/mergeClass.js";

export interface IBsPaginationItem extends ITagLi {
	active?: boolean;
	disabled?: boolean;
	href?: string;
}

const convert = (attr: IBsPaginationItem) => {
	let liAttr: ITagLi = {
		class: ["page-item", attr.active ? "active" : undefined, attr.disabled ? "disabled" : undefined],
		aria: { current: attr.active ? "page" : undefined },
	};

	delete attr.active;
	delete attr.disabled;

	attr.class = mergeClass(attr.class, "page-link");

	if (attr.href) {
		liAttr.elem = new a(attr);
	} else {
		liAttr.elem = new span(attr);
	}

	return liAttr;
};

export class item extends li {
	constructor(); //#1
	constructor(attr: IBsPaginationItem); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsPaginationItem, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsPaginationItem>("elem", arg)));
	}
}

export const Item = (AttrOrElem?: IBsPaginationItem | IElem, Elem?: IElem) =>
	genTagClass<item, IBsPaginationItem>(item, AttrOrElem, Elem);
