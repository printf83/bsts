import { IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { h } from "../../html/h.js";
import { UUID } from "../../core/fn/uuid.js";
import { IAttrBSCollapseToggle, toggle } from "../collapse/toggle.js";

const convert = (attr: IAttrBSCollapseToggle) => {
	attr.id = attr.id || UUID();
	attr.class = mergeClass(attr.class, "accordion-header");
	attr.elem = new toggle(
		{
			class: "accordion-button",
			link: attr.link,
			target: attr.target,
			control: attr.control,
		},
		attr.elem ? attr.elem : ""
	);

	delete attr.link;
	delete attr.target;
	delete attr.control;

	return attr;
};

export class header extends h {
	constructor(); //#1
	constructor(attr: IAttrBSCollapseToggle); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSCollapseToggle, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(2, bsConstArg<IAttrBSCollapseToggle>("elem", convert, arg));
	}
}
