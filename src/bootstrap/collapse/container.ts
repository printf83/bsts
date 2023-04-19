import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";

export interface IBsCollapseContainer extends IAttr {
	horizontal?: true;
}

const convert = (attr: IBsCollapseContainer) => {
	attr.id ??= UUID();
	attr.class = mergeClass(attr.class, ["collapse", attr.horizontal ? "collapse-horizontal" : undefined]);

	delete attr.horizontal;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IBsCollapseContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsCollapseContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IBsCollapseContainer>("elem", convert, arg));
	}
}
