import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { UUID } from "../../core/uuid.js";
import { Container, container } from "../collapse/container.js";
import { div } from "../../html/div.js";
import { mergeObject } from "../../core/mergeObject.js";

export interface Body extends Container {
	labelledby?: string;
	parent?: string;
	show?: boolean;
}

const convert = (attr: Body) => {
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
	constructor();
	constructor(attr: Body);
	constructor(elem: IElem);
	constructor(attr: Body, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Body>("elem", arg)));
	}
}
