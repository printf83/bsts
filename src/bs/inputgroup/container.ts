import { IAttr, IElem, isAttr } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { div } from "../../ht/div.js";

export interface IAttrBSInputGroupContainer extends IAttr {
	weight?: "sm" | "lg";
	noWarp?: true;
}

const convert = (attr: IAttrBSInputGroupContainer): IAttr => {
	attr.class = mergeClass(attr.class, [
		"input-group",
		attr.weight ? `input-group-${attr.weight}` : "",
	]);

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
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSInputGroupContainer>(arg[0])) {
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