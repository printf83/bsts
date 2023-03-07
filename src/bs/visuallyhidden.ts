import { IAttr, IElem, isAttr, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";

export interface IAttrBSVisuallyhidden extends IAttr {
	focusable?: boolean;
	href?: string;
}

const convert = (attr: IAttrBSVisuallyhidden): IAttr => {
	if (attr.href) {
		attr.focusable = attr.focusable || true;
	}

	attr.class = mergeClass(attr.class, [
		attr.focusable ? "visually-hidden-focusable" : "visually-hidden",
	]);

	delete attr.focusable;

	return attr;
};

export class visuallyhidden extends tag {
	constructor(); //#1
	constructor(attr: IAttrBSVisuallyhidden); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSVisuallyhidden, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super("span", convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSVisuallyhidden>(arg[0])) {
				//#2
				super(arg[0].href ? "a" : "span", convert(arg[0]));
			} else {
				//#3
				super("span", convert({}), arg[0]);
			}
		} else if (arg.length === 2) {
			//#4
			super(arg[0].href ? "a" : "span", convert(arg[0]), arg[1]);
		}
	}
}
