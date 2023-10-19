import { elem } from "../../../../interface/core/elem.js";
import { bsConstArg } from "../../../../core/bootstrap.js";
import { div } from "../../../../html/div.js";
import { mergeObject } from "../../../../core/util/mergeObject.js";
import { container as Container } from "../../../../interface/bootstrap/carousel/inner/item/container.js";

const convert = (attr: Container) => {
	attr = mergeObject(
		{
			class: ["carousel-item", attr.active ? "active" : undefined],
			data: { "bs-interval": attr.interval },
		},
		attr
	);

	delete attr.active;
	delete attr.interval;

	return attr;
};

export class container extends div {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem | elem[]);
	constructor(attr: Container, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}
