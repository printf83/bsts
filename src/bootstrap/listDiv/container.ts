import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { div } from "../../html/div.js";

export interface IBsListDivContainer extends IAttr {
	flush?: boolean;
	numbered?: boolean;
	horizontal?: boolean | bootstrapType.viewport;
}

const convert = (attr: IBsListDivContainer) => {
	attr.class = mergeClass(attr.class, [
		"list-group",
		attr.flush ? "list-group-flush" : undefined,
		attr.numbered ? "list-group-numbered" : undefined,
		attr.horizontal
			? attr.horizontal === true
				? "list-group-horizontal"
				: `list-group-horizontal-${attr.horizontal}`
			: undefined,
	]);

	delete attr.flush;
	delete attr.numbered;
	delete attr.horizontal;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IBsListDivContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsListDivContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IBsListDivContainer>("elem", convert, arg));
	}
}
