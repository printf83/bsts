import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { h2 } from "../../html/h2.js";
import { UUID } from "../../core/uuid.js";
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
	constructor(elem: IElem);
	constructor(attr: Header, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Header>("elem", arg)));
	}
}
