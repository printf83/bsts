import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { div } from "../../html/div.js";

export interface Bar extends IAttr {
	color?: bootstrapType.color;
	striped?: boolean;
	animated?: boolean;
}

const convert = (attr: Bar) => {
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
	constructor(attr: Bar); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Bar, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Bar>("elem", arg)));
	}
}

export const Bar = (AttrOrElem?: Bar | IElem, Elem?: IElem) => genTagClass<bar, Bar>(bar, AttrOrElem, Elem);
