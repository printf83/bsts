import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { mergeObject } from "../../core/mergeObject.js";
import { div } from "../../html/div.js";

export interface IAttrBSInputGroupContainer extends IAttr {
	weight?: "sm" | "lg";
	noWarp?: true;
}

const convert = (attr: IAttrBSInputGroupContainer) => {
	attr.class = mergeClass(attr.class, ["input-group", attr.weight ? `input-group-${attr.weight}` : undefined]);

	if (attr.noWarp) {
		attr = mergeObject({ flex: "nowrap" }, attr);
	}

	delete attr.weight;
	delete attr.noWarp;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttrBSInputGroupContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSInputGroupContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSInputGroupContainer>("elem", convert, arg));
	}
}
