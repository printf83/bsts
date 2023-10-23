import { bsConstructor, bsConstructorMultiTag } from "../core/bootstrap.js";
import { tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { visuallyhidden as Visuallyhidden } from "../interface/bootstrap/visuallyhidden.js";

export class visuallyhidden extends tag {
	constructor();
	constructor(attr: Visuallyhidden);
	constructor(elem: elem | elem[]);
	constructor(attr: Visuallyhidden, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(
			bsConstructorMultiTag<Visuallyhidden>("elem", "span", "a", (i) => (i.href ? true : false), arg),
			bsConstructor<Visuallyhidden>("elem", arg)
		);
	}

	convert(attr: Visuallyhidden) {
		if (attr.href) {
			attr.focusable ??= true;
		}

		attr.visually = attr.focusable ? "hidden-focusable" : "hidden";

		delete attr.focusable;
		return super.convert(attr);
	}
}
