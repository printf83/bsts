import { IAttr, IElem, genTagClass, tag } from "../core/tag.js";
import { bootstrapType, bsConstArg, bsConstArgTag } from "../core/bootstrap.js";
import { mergeClass } from "../core/mergeClass.js";
import { visuallyhidden } from "./visuallyhidden.js";
import { mergeObject } from "../core/mergeObject.js";

export interface Spinner extends IAttr {
	type?: "border" | "grow";
	small?: true;
	role?: "status";
	color?: bootstrapType.textColor;
}

const convert = (attr: Spinner) => {
	attr.role ??= "status";
	attr.type ??= "border";
	attr.textColor ??= attr.color || attr.textColor;
	attr.elem ??= "Loading...";

	attr.class = mergeClass(attr.class, [
		`spinner-${attr.type}`,
		attr.small && attr.type ? `spinner-${attr.type}-sm` : undefined,
	]);

	if (attr.elem === "") {
		attr = mergeObject({ aria: { hidden: "true" } }, attr);
	} else {
		if (attr.elem) {
			attr.elem = new visuallyhidden(attr.elem);
		}
	}

	delete attr.small;
	delete attr.type;
	delete attr.color;

	return attr;
};

export class spinner extends tag {
	constructor(); //#1
	constructor(attr: Spinner); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Spinner, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(
			bsConstArgTag<Spinner>("elem", "span", "div", (i) => (i.elem === "" ? false : i.elem ? false : true), arg),
			convert(bsConstArg<Spinner>("elem", arg))
		);
	}
}

export const Spinner = (AttrOrElem?: Spinner | IElem, Elem?: IElem) =>
	genTagClass<spinner, Spinner>(spinner, AttrOrElem, Elem);
