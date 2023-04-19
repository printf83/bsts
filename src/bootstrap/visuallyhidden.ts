import { bsConstArg, bsConstArgTag } from "../core/bootstrap.js";
import { IAttr, IElem, tag } from "../core/tag.js";

export interface IBsVisuallyhidden extends IAttr {
	focusable?: boolean;
	href?: string;
}

const convert = (attr: IBsVisuallyhidden) => {
	if (attr.href) {
		attr.focusable ??= true;
	}

	attr.visually = attr.focusable ? "hidden-focusable" : "hidden";

	delete attr.focusable;

	return attr;
};

export class visuallyhidden extends tag {
	constructor(); //#1
	constructor(attr: IBsVisuallyhidden); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsVisuallyhidden, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(
			bsConstArgTag<IBsVisuallyhidden>("elem", "span", "a", (i) => (i.href ? true : false), arg),
			bsConstArg<IBsVisuallyhidden>("elem", convert, arg)
		);
	}
}
