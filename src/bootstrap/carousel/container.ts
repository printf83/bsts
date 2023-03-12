import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { div } from "../../html/div.js";
import { mergeObject } from "../../core/fn/mergeObject.js";

export interface IAttrBSCarousel extends IAttr {
	fade?: boolean;
	autoPlay?: boolean;
	disableTouch?: boolean;
}

const convert = (attr: IAttrBSCarousel) => {
	attr = mergeObject(
		{
			class: ["carousel", "slide"],
			data: {
				"bs-ride": attr.autoPlay === true ? "carousel" : attr.autoPlay === false ? "true" : undefined,
				"bs-touch": attr.disableTouch ? "false" : undefined,
			},
		},
		attr
	);

	delete attr.fade;
	delete attr.autoPlay;
	delete attr.disableTouch;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttrBSCarousel); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSCarousel, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSCarousel>("elem", convert, arg));
	}
}
