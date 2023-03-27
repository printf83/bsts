import { IAttr, IElem } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { div } from "../html/div.js";

export interface IAttrBSScrollspy extends IAttr {
	target?: string;
	smooth?: boolean;
	rootMargin?: string;
}
const convert = (attr: IAttrBSScrollspy) => {
	attr = mergeObject(
		{
			data: {
				"bs-spy": "scroll",
				"bs-target": attr.target,
				"bs-smooth-scroll": attr.smooth ? "true" : undefined,
				"bs-root-margin": attr.rootMargin,
			},
			tabindex: attr.tabindex || "0",
		},
		attr
	);

	delete attr.target;
	delete attr.smooth;
	delete attr.rootMargin;

	return attr;
};

export class scrollspy extends div {
	constructor(); //#1
	constructor(attr: IAttrBSScrollspy); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSScrollspy, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSScrollspy>("elem", convert, arg));
	}
}
