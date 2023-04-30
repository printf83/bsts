import { bsConstArg, bsConstArgTag } from "../core/bootstrap.js";
import { IAttr, IElem, genTagClass, tag } from "../core/tag.js";

export interface Visuallyhidden extends IAttr {
	focusable?: boolean;
	href?: string;
}

const convert = (attr: Visuallyhidden) => {
	if (attr.href) {
		attr.focusable ??= true;
	}

	attr.visually = attr.focusable ? "hidden-focusable" : "hidden";

	delete attr.focusable;

	return attr;
};

export class visuallyhidden extends tag {
	constructor(); //#1
	constructor(attr: Visuallyhidden); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Visuallyhidden, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(
			bsConstArgTag<Visuallyhidden>("elem", "span", "a", (i) => (i.href ? true : false), arg),
			convert(bsConstArg<Visuallyhidden>("elem", arg))
		);
	}
}

export const Visuallyhidden = (AttrOrElem?: Visuallyhidden | IElem, Elem?: IElem) =>
	genTagClass<visuallyhidden, Visuallyhidden>(visuallyhidden, AttrOrElem, Elem);
