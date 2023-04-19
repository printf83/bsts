import { IAttr, IElem } from "../../../../core/tag.js";
import { bsConstArg } from "../../../../core/bootstrap.js";
import { div } from "../../../../html/div.js";
import { mergeObject } from "../../../../core/mergeObject.js";

export interface IBsCarouselInnerItemContainer extends IAttr {
	active?: boolean;
	interval?: number;
}

const convert = (attr: IBsCarouselInnerItemContainer) => {
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
	constructor(); //#1
	constructor(attr: IBsCarouselInnerItemContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsCarouselInnerItemContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IBsCarouselInnerItemContainer>("elem", convert, arg));
	}
}
