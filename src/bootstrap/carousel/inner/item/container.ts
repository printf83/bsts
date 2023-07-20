import { IAttr, IElem } from "../../../../core/tag.js";
import { bsConstArg } from "../../../../core/bootstrap.js";
import { div } from "../../../../html/div.js";
import { mergeObject } from "../../../../core/mergeObject.js";

export interface Container extends IAttr {
	active?: boolean;
	interval?: number;
}

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
	constructor(elem: IElem);
	constructor(attr: Container, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}
