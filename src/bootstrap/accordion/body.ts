import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { UUID } from "../../core/fn/uuid.js";
import { IAttrBSCollapseContainer, container } from "../collapse/container.js";
import { div } from "../../html/div.js";

const convert = (attr: IAttr) => {
	attr.id = attr.id || UUID();
	attr.class = mergeClass(attr.class, "accordion-collapse");
	attr.elem = new div({ class: "accordion-body" }, attr.elem ? attr.elem : "");
	return attr;
};

export class body extends container {
	constructor(); //#1
	constructor(attr: IAttrBSCollapseContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSCollapseContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSCollapseContainer>("elem", convert, arg));
	}
}
