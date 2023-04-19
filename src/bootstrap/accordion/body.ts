import { IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { UUID } from "../../core/uuid.js";
import { IBsCollapseContainer, container } from "../collapse/container.js";
import { div } from "../../html/div.js";
import { mergeObject } from "../../core/mergeObject.js";

export interface IBsAccordionBody extends IBsCollapseContainer {
	labelledby?: string;
	parent?: string;
	show?: boolean;
}

const convert = (attr: IBsAccordionBody) => {
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
	constructor(attr: IBsAccordionBody); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsAccordionBody, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsAccordionBody>("elem", arg)));
	}
}

export const Body = (AttrOrElem?: IBsAccordionBody | IElem, Elem?: IElem) =>
	genTagClass<body, IBsAccordionBody>(body, AttrOrElem, Elem);
