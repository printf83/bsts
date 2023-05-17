import { IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { Li, li } from "../../html/li.js";
import { span } from "../../html/span.js";
import { a } from "../../html/a.js";
import { mergeClass } from "../../core/mergeClass.js";

export interface Item extends Li {
	active?: boolean;
	disabled?: boolean;
	href?: string;
}

const convert = (attr: Item) => {
	let liAttr: Li = {
		class: ["page-item", attr.active ? "active" : undefined, attr.disabled ? "disabled" : undefined],
		aria: { current: attr.active ? "page" : undefined },
	};

	if (attr.disabled) {
		attr.href = undefined;
	}

	delete attr.active;

	attr.class = mergeClass(attr.class, "page-link");

	if (attr.href) {
		liAttr.elem = new a(attr);
	} else {
		// delete attr.disabled;
		liAttr.elem = new span(attr);
	}

	return liAttr;
};

export class item extends li {
	constructor();
	constructor(attr: Item);
	constructor(elem: IElem);
	constructor(attr: Item, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Item>("elem", arg)));
	}
}

export const Item = (AttrOrElem?: Item | IElem, Elem?: IElem) => genTagClass<item, Item>(item, AttrOrElem, Elem);
