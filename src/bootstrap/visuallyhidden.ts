import { bsConstArg, bsConstArgTag } from "../core/bootstrap.js";
import { IElem, tag } from "../core/tag.js";
import { visuallyhidden as Visuallyhidden } from "../interface/bootstrap/visuallyhidden.js";

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
	constructor(elem: elem);
	constructor(attr: Visuallyhidden, elem: elem);
	constructor(...arg: any[]) {
		super(
			bsConstArgTag<Visuallyhidden>("elem", "span", "a", (i) => (i.href ? true : false), arg),
			convert(bsConstArg<Visuallyhidden>("elem", arg))
		);
	}
}
