import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { UUID } from "../../core/uuid.js";
import { IAttrBSCollapseContainer, container } from "../collapse/container.js";
import { div } from "../../html/div.js";
import { mergeObject } from "../../core/mergeObject.js";

export interface IAttrBSAccordionBody extends IAttrBSCollapseContainer {
	labelledby?: string;
	parent?: string;
	show?: boolean;
}

const convert = (attr: IAttrBSAccordionBody) => {
	attr = mergeObject(
		{
			id: attr.id || UUID(),
			class: ["accordion-collapse", attr.show ? "show" : undefined],
			data: { "bs-parent": attr.parent },
			aria: { labelledby: attr.labelledby },
		},
		attr
	);

	attr.elem = new div({ class: "accordion-body" }, attr.elem ? attr.elem : "");

	delete attr.labelledby;
	delete attr.parent;
	delete attr.show;

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
