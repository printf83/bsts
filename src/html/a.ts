import { tag, tagConstructor } from "../core/tag.js";
import { mergeClass } from "../core/util/mergeClass.js";

import { mergeObject } from "../core/util/mergeObject.js";
import { a as A } from "../interface/html/a.js";
import { elem } from "../interface/core/elem.js";

/**
 * The a class extends the tag class and is used to generate <a> elements.
 *
 * It accepts the same constructor arguments as the tag class, as well as an
 * A interface for attributes. The convert() method handles converting the
 * A interface into actual attributes, including handling class names based
 * on the color, stretched, and disabled properties.
 *
 * Disabled links have the href removed and aria-disabled added. The color
 * and stretched properties are also deleted before calling the tag convert().
 */
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
