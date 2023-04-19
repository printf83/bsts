import { IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { h } from "../../html/h.js";
import { UUID } from "../../core/uuid.js";
import { IBsCollapseToggle, toggle } from "../collapse/toggle.js";

const convert = (attr: IBsCollapseToggle) => {
	attr.id ??= UUID();
	attr.class = mergeClass(attr.class, "accordion-header");
	attr.elem = new toggle(
		{
			class: "accordion-button",
			defColor: false,
			link: attr.link,
			target: attr.target,
			controlfor: attr.controlfor,
			expanded: attr.expanded,
		},
		attr.elem ? attr.elem : ""
	);

	delete attr.link;
	delete attr.target;
	delete attr.controlfor;
	delete attr.expanded;

	return attr;
};

export class header extends h {
	constructor(); //#1
	constructor(attr: IBsCollapseToggle); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsCollapseToggle, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(2, convert(bsConstArg<IBsCollapseToggle>("elem", arg)));
	}
}

export const Header = (AttrOrElem?: IBsCollapseToggle | IElem, Elem?: IElem) =>
	genTagClass<header, IBsCollapseToggle>(header, AttrOrElem, Elem);
