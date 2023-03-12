import { IElem } from "../../../../core/base/tag.js";
import { bsConstArg } from "../../../../core/base/bootstrap.js";
import { button as TButton, IAttrTagButton } from "../../../../html/button.js";
import { mergeObject } from "../../../../core/fn/mergeObject.js";
import { span } from "../../../../html/span.js";
import { visuallyhidden } from "../../../visuallyhidden.js";

export interface IAttrBSCarouselInnerControlNext extends IAttrTagButton {
	target?: string;
}

const convert = (attr: IAttrBSCarouselInnerControlNext) => {
	attr = mergeObject(
		{
			class: "carousel-control-next",
			data: {
				"bs-target": attr.target,
				"bs-slide": "next",
			},
		},
		attr
	);

	if (!attr.elem) {
		attr.elem = [
			new span({ class: "carousel-control-next-icon", aria: { hidden: "true" } }),
			new visuallyhidden("Next"),
		];
	}

	delete attr.target;

	return attr;
};

export class next extends TButton {
	constructor(); //#1
	constructor(attr: IAttrBSCarouselInnerControlNext); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSCarouselInnerControlNext, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSCarouselInnerControlNext>("elem", convert, arg));
	}
}
