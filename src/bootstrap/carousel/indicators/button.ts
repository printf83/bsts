import { IElem } from "../../../core/base/tag.js";
import { bsConstArg } from "../../../core/base/bootstrap.js";
import { button as TButton, IAttrTagButton } from "../../../html/button.js";
import { mergeObject } from "../../../core/fn/mergeObject.js";

export interface IAttrBSCarouselIndicatorsButton extends IAttrTagButton {
	active?: boolean;
	label?: string;
	slide?: number;
	target?: string;
}

const convert = (attr: IAttrBSCarouselIndicatorsButton) => {
	attr = mergeObject(
		{
			class: [attr.active ? "active" : undefined],
			aria: {
				current: attr.active ? "true" : undefined,
				label: attr.label,
			},
			data: {
				"bs-target": attr.target,
				"bs-slide-to": attr.slide?.toString(),
			},
		},
		attr
	);

	delete attr.active;
	delete attr.label;
	delete attr.slide;
	delete attr.target;

	return attr;
};

export class button extends TButton {
	constructor(); //#1
	constructor(attr: IAttrBSCarouselIndicatorsButton); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSCarouselIndicatorsButton, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSCarouselIndicatorsButton>("elem", convert, arg));
	}
}
