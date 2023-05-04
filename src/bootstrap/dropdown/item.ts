import { genTagClass, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { a, A } from "../../html/a.js";

export interface Item extends A {
	active?: boolean;
	current?: string;
}

const convert = (attr: Item) => {
	attr = mergeObject(
		{
			class: ["dropdown-item", attr.active ? "active" : undefined],
			aria: { current: attr.active ? (attr.current ? attr.current : "true") : undefined },
		},
		attr
	);

	delete attr.active;
	delete attr.current;

	return attr;
};

export class item extends a {
	constructor();
	constructor(attr: Item);
	constructor(elem: IElem);
	constructor(attr: Item, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Item>("elem", arg)));
	}
}

export const Item = (AttrOrElem?: Item | IElem, Elem?: IElem) => genTagClass<item, Item>(item, AttrOrElem, Elem);
