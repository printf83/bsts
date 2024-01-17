import { bsConstructor, bsConstructorMultiTag } from "../core/bootstrap.js";
import { tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { visuallyhidden as Visuallyhidden } from "../interface/bootstrap/visuallyhidden.js";

/**
 * Export class visuallyhidden extends the tag class to create visually hidden elements with Bootstrap styling.
 * Provides constructors to create visuallyhidden elements with various configurations of attributes and child elements.
 * The convert method handles setting the appropriate Bootstrap visually hidden class and attributes based on the given config.
 */
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
