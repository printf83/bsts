import { IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { UUID } from "../../core/fn/uuid.js";
import { IAttrBSCollapseContainer, container } from "../collapse/container.js";
import { div } from "../../html/div.js";
import { mergeObject } from "../../core/fn/mergeObject.js";

export interface IAttrBSAccordionBody extends IAttrBSCollapseContainer {
	parent?: string;
}

const convert = (attr: IAttrBSAccordionBody) => {
	attr = mergeObject(
		{ id: attr.id || UUID(), class: "accordion-collapse", data: { "bs-parent": attr.parent } },
		attr
	);

	attr.elem = new div({ class: "accordion-body" }, attr.elem ? attr.elem : "");

	delete attr.parent;

	return attr;
};

export class body extends container {
	constructor(); //#1
	constructor(attr: IAttrBSAccordionBody); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSAccordionBody, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSAccordionBody>("elem", convert, arg));
	}
}
