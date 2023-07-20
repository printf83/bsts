import { bsConstArg, bsConstArgTag } from "../core/bootstrap.js";
import { IAttr, IElem, tag } from "../core/tag.js";

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
	constructor();
	constructor(attr: Visuallyhidden);
	constructor(elem: IElem);
	constructor(attr: Visuallyhidden, elem: IElem);
	constructor(...arg: any[]) {
		super(
			bsConstArgTag<Visuallyhidden>("elem", "span", "a", (i) => (i.href ? true : false), arg),
			convert(bsConstArg<Visuallyhidden>("elem", arg))
		);
	}
}
