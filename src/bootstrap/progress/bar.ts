import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { div } from "../../html/div.js";

export interface IAttrBSProgressBar extends IAttr {
	color?: bootstrapType.color;
	striped?: boolean;
	animated?: boolean;
}

const convert = (attr: IAttrBSProgressBar) => {
	attr = mergeObject(
		{
			class: [
				"progress-bar",
				attr.striped ? "progress-bar-striped" : undefined,
				attr.striped && attr.animated ? "progress-bar-animated" : undefined,
			],
			bgColor: attr.color,
		},
		attr
	);

	delete attr.color;
	delete attr.striped;
	delete attr.animated;

	return attr;
};

export class bar extends div {
	constructor(); //#1
	constructor(attr: IAttrBSProgressBar); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSProgressBar, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSProgressBar>("elem", convert, arg));
	}
}
