import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { h } from "../../html/h.js";
import { UUID } from "../../core/uuid.js";
import { Button, button } from "../collapse/button.js";

const convert = (attr: Button) => {
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

export class header extends h {
	constructor();
	constructor(attr: Button);
	constructor(elem: IElem);
	constructor(attr: Button, elem: IElem);
	constructor(...arg: any[]) {
		super(2, convert(bsConstArg<Button>("elem", arg)));
	}
}
