import { IElem, genTagClass } from "../../../../core/tag.js";
import { bsConstArg } from "../../../../core/bootstrap.js";
import { button as TButton, ITagButton } from "../../../../html/button.js";
import { mergeObject } from "../../../../core/mergeObject.js";
import { span } from "../../../../html/span.js";
import { visuallyhidden } from "../../../visuallyhidden.js";

export interface IBsCarouselInnerControlPrev extends ITagButton {
	target?: string;
}

const convert = (attr: IBsCarouselInnerControlPrev) => {
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
	constructor(attr: IBsCarouselInnerControlPrev); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsCarouselInnerControlPrev, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsCarouselInnerControlPrev>("elem", arg)));
	}
}

export const Prev = (AttrOrElem?: IBsCarouselInnerControlPrev | IElem, Elem?: IElem) =>
	genTagClass<prev, IBsCarouselInnerControlPrev>(prev, AttrOrElem, Elem);
