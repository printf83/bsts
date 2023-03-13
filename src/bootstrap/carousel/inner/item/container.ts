import { IAttr, IElem } from "../../../../core/base/tag.js";
import { bsConstArg } from "../../../../core/base/bootstrap.js";
import { div } from "../../../../html/div.js";
import { mergeObject } from "../../../../core/fn/mergeObject.js";

export interface IAttrBSCarouselInnerItemContainer extends IAttr {
	active?: boolean;
	interval?: number;
}

const convert = (attr: IAttrBSCarouselInnerItemContainer) => {
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
	constructor(attr: IAttrBSCarouselInnerItemContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSCarouselInnerItemContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSCarouselInnerItemContainer>("elem", convert, arg));
	}
}
