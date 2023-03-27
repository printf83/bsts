import { IElem } from "../../../../core/tag.js";
import { bsConstArg } from "../../../../core/bootstrap.js";
import { button as TButton, IAttrTagButton } from "../../../../html/button.js";
import { mergeObject } from "../../../../core/mergeObject.js";
import { span } from "../../../../html/span.js";
import { visuallyhidden } from "../../../visuallyhidden.js";

export interface IAttrBSCarouselInnerControlPrev extends IAttrTagButton {
	target?: string;
}

const convert = (attr: IAttrBSCarouselInnerControlPrev) => {
	attr = mergeObject(
		{
			class: "carousel-control-prev",
			data: {
				"bs-target": attr.target,
				"bs-slide": "prev",
			},
		},
		attr
	);

	if (!attr.elem) {
		attr.elem = [
			new span({ class: "carousel-control-prev-icon", aria: { hidden: "true" } }),
			new visuallyhidden("Previous"),
		];
	}

	delete attr.target;

	return attr;
};

export class prev extends TButton {
	constructor(); //#1
	constructor(attr: IAttrBSCarouselInnerControlPrev); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSCarouselInnerControlPrev, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSCarouselInnerControlPrev>("elem", convert, arg));
	}
}
