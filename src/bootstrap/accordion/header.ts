import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { h2 } from "../../html/h2.js";
import { UUID } from "../../core/util/uuid.js";
import { button } from "../collapse/button.js";
import { button as Header } from "../../interface/bootstrap/collapse/button.js";

const convert = (attr: Header) => {
	attr.id ??= UUID();
	attr.class = mergeClass(attr.class, "accordion-header");
	attr.elem = new button(
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

export class header extends h2 {
	constructor();
	constructor(attr: Header);
	constructor(elem: elem | elem[]);
	constructor(attr: Header, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstructor<Header>("elem", arg)));
	}
}
