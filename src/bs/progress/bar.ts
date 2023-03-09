import { bootstrapType } from "../../core/base/bootstrap.js";
import { IAttr, IElem } from "../../core/base/tag.js";
import { conElem } from "../../core/fn/arg.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { div } from "../../ht/div.js";

export interface IAttrBSProgressBar extends IAttr {
	color?: bootstrapType.color[number];
	striped?: boolean;
	animated?: boolean;
}

const convert = (attr: IAttrBSProgressBar): IAttr => {
	attr = mergeObject(
		{
			class: [
				"progress-bar",
				attr.striped ? "progress-bar-striped" : "",
				attr.striped && attr.animated ? "progress-bar-animated" : "",
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
		super(conElem<IAttrBSProgressBar>(convert, arg));
	}
}
