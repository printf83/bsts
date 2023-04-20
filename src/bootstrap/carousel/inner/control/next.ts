import { IElem, genTagClass } from "../../../../core/tag.js";
import { bsConstArg } from "../../../../core/bootstrap.js";
import { button as TButton, ITagButton } from "../../../../html/button.js";
import { mergeObject } from "../../../../core/mergeObject.js";
import { span } from "../../../../html/span.js";
import { visuallyhidden } from "../../../visuallyhidden.js";

export interface IBsCarouselInnerControlNext extends ITagButton {
	target?: string;
}

const convert = (attr: IBsCarouselInnerControlNext) => {
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
	constructor(attr: IBsCarouselInnerControlNext); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsCarouselInnerControlNext, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsCarouselInnerControlNext>("elem", arg)));
	}
}

export const Next = (AttrOrElem?: IBsCarouselInnerControlNext | IElem, Elem?: IElem) =>
	genTagClass<next, IBsCarouselInnerControlNext>(next, AttrOrElem, Elem);
