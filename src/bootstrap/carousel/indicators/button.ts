import { IElem } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { button as TButton, ITagButton } from "../../../html/button.js";
import { mergeObject } from "../../../core/mergeObject.js";

export interface IBsCarouselIndicatorsButton extends ITagButton {
	active?: boolean;
	slide?: number;
	target?: string;
}

const convert = (attr: IBsCarouselIndicatorsButton) => {
	attr = mergeObject(
		{
			class: [attr.active ? "active" : undefined],
			aria: {
				current: attr.active ? "true" : undefined,
			},
			data: {
				"bs-target": attr.target,
				"bs-slide-to": attr.slide?.toString(),
			},
		},
		attr
	);

	delete attr.active;
	delete attr.slide;
	delete attr.target;

	return attr;
};

export class button extends TButton {
	constructor(); //#1
	constructor(attr: IBsCarouselIndicatorsButton); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsCarouselIndicatorsButton, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IBsCarouselIndicatorsButton>("elem", convert, arg));
	}
}
