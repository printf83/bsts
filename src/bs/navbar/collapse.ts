import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { UUID } from "../../core/fn/uuid.js";
import { container as TCollapseContainer, IAttrBSCollapseContainer } from "../collapse/container.js";

const convert = (attr: IAttrBSCollapseContainer): IAttr => {
	attr.id = attr.id || UUID();
	attr.class = mergeClass(attr.class, "navbar-collapse");

	delete attr.horizontal;

	return attr;
};

export class collapse extends TCollapseContainer {
	constructor(); //#1
	constructor(attr: IAttrBSCollapseContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSCollapseContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSCollapseContainer>("elem", convert, arg));
	}
}
