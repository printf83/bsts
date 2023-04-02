import { bsConstArg, bsConstArgTag } from "../core/bootstrap.js";
import { IAttr, IElem, tag } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";

export interface IAttrBSVisuallyhidden extends IAttr {
	focusable?: boolean;
	href?: string;
}

const convert = (attr: IAttrBSVisuallyhidden) => {
	if (attr.href) {
		attr.focusable ??= true;
	}

	attr.class = mergeClass(attr.class, [attr.focusable ? "visually-hidden-focusable" : "visually-hidden"]);

	delete attr.focusable;

	return attr;
};

export class visuallyhidden extends tag {
	constructor(); //#1
	constructor(attr: IAttrBSVisuallyhidden); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSVisuallyhidden, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(
			bsConstArgTag<IAttrBSVisuallyhidden>("elem", "span", "a", (i) => (i.href ? true : false), arg),
			bsConstArg<IAttrBSVisuallyhidden>("elem", convert, arg)
		);
	}
}
