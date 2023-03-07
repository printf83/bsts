import { bootstrapType } from "../../core/base/bootstrap.js";
import { IAttr, IElem, isAttr } from "../../core/base/tag.js";
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
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSProgressBar>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({}), arg[0]);
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(arg[0]), arg[1]);
		}
	}
}
