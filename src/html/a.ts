import { tag, tagConstructor } from "../core/tag.js";
import { mergeClass } from "../core/util/mergeClass.js";

import { mergeObject } from "../core/util/mergeObject.js";
import { a as A } from "../interface/html/a.js";
import { elem } from "../interface/core/elem.js";

export class a extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: A);
	constructor(attr: A, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("a", tagConstructor<A>("elem", arg));
	}

	convert(attr: A) {
		attr.class = mergeClass(attr.class, [
			attr.color ? `link-${attr.color}` : undefined,
			attr.stretched ? "stretched-link" : undefined,
			attr.disabled ? "disabled" : undefined,
		]);

		if (attr.disabled) {
			delete attr.href;

			attr = mergeObject(
				{
					aria: { disabled: "true" },
					tabindex: -1,
				},
				attr
			);
		}

		delete attr.color;
		delete attr.stretched;
		delete attr.disabled;

		return super.convert(attr);
	}
}
