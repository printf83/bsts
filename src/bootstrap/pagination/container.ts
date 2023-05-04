import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { Ul, ul } from "../../html/ul.js";
import { nav } from "../../html/nav.js";

export interface Container extends Ul {
	weight?: "sm" | "lg";
}

const convert = (attr: Container) => {
	//nav only prop is label
	let navAttr: IAttr = {
		label: attr.label,
	};

	//remove label for ul
	delete attr.label;

	//convert attr for ul
	attr.class = mergeClass(attr.class, ["pagination", attr.weight ? `pagination-${attr.weight}` : undefined]);

	delete attr.weight;

	//add ul to nav
	navAttr.elem = new ul(attr);

	return navAttr;
};

export class container extends nav {
	constructor();
	constructor(attr: Container);
	constructor(elem: IElem);
	constructor(attr: Container, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}

export const Container = (AttrOrElem?: Container | IElem, Elem?: IElem) =>
	genTagClass<container, Container>(container, AttrOrElem, Elem);
