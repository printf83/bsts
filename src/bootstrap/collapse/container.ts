import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";
import { mergeObject } from "../../core/mergeObject.js";
import { container as Container } from "../../interface/bootstrap/collapse/container.js";

const convert = (attr: Container) => {
	attr.id ??= UUID();
	attr.autoInit ??= true;

	attr = mergeObject(
		{
			class: [
				attr.autoInit ? "collapse" : undefined,
				attr.horizontal ? "collapse-horizontal" : undefined,
				attr.show ? "show" : undefined,
			],
			data: {
				"bs-parent": attr.parent,
			},
		},
		attr
	);

	delete attr.autoInit;
	delete attr.horizontal;
	delete attr.parent;
	delete attr.show;

	return attr;
};

export class container extends div {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem);
	constructor(attr: Container, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}
