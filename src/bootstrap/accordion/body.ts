import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { UUID } from "../../core/util/uuid.js";
import { container } from "../collapse/container.js";
import { div } from "../../html/div.js";
import { mergeObject } from "../../core/util/mergeObject.js";
import { body as Body } from "../../interface/bootstrap/accordion/body.js";

export class body extends container {
	constructor();
	constructor(attr: Body);
	constructor(elem: elem | elem[]);
	constructor(attr: Body, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Body>("elem", arg));
	}

	convert(attr: Body) {
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
		return super.convert(attr);
	}
}
