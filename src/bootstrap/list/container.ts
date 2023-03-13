import { bootstrapType } from "../../core/base/bootstrap.js";
import { IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { IAttrTagUl, ul } from "../../html/ul.js";

export interface IAttrBSListContainer extends IAttrTagUl {
	flush?: boolean;
	numbered?: boolean;
	horizontal?: boolean | bootstrapType.viewport[number];
}

const convert = (attr: IAttrBSListContainer) => {
	attr.class = mergeClass(attr.class, [
		"list-group",
		attr.flush ? "list-group-flush" : "",
		attr.numbered ? "list-group-numbered" : "",
		attr.horizontal
			? attr.horizontal === true
				? "list-group-horizontal"
				: `list-group-horizontal-${attr.horizontal}`
			: "",
	]);

	delete attr.flush;
	delete attr.numbered;
	delete attr.horizontal;

	return attr;
};

export class container extends ul {
	constructor(); //#1
	constructor(attr: IAttrBSListContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSListContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSListContainer>("elem", convert, arg));
	}
}
