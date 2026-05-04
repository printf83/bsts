import { bsConstructor } from "../core/bootstrap.js";
import { tagConstructorArgs } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { i } from "../html/i.js";
import { icon as Icon } from "../interface/bootstrap/icon.js";

/**
 * Generates a static icon element with the given type, id and optional additional attributes.
 * @param t - The icon type, e.g. "bi" for Bootstrap Icons.
 * @param i - The specific icon id, e.g. "caret-down" for the caret down icon.
 * @param a - Optional additional attributes to apply to the icon.
 */
const genStaticIcon = (t: Icon["type"], i: string, a?: Icon) => {
	if (a) {
		delete a.type;
		delete a.id;
		return new icon(mergeObject({ type: t, id: i }, a));
	} else {
		return new icon({ type: t, id: i });
	}
};

/**
 * Icon component that extends the i component.
 * Allows constructing Bootstrap Icons or other icon types.
 * Handles conversion of icon type and id attributes.
 * Adds appropriate CSS classes and click event bubbling.
 * Includes static helper to generate Bootstrap Icons.
 */
export class icon extends i {
	constructor();
	constructor(attr: Icon);
	constructor(elem: elem | elem[]);
	constructor(attr: Icon, elem: elem | elem[]);
	constructor(...arg: tagConstructorArgs<Icon>) {
		super(bsConstructor("elem", arg));
	}

	convert(attr: Icon) {
		if (!attr.id && attr.elem && typeof attr.elem === "string") {
			attr.id = attr.elem;
			attr.elem = undefined;
		}

		if (!attr.type && attr.id && attr.id.includes(" ")) {
			let sid = attr.id.split(" ");
			if (sid.length === 2) {
				switch (sid[0]) {
					case "bi":
						attr.type = sid[0];
						attr.id = sid[1];
						break;
					default:
						console.error("unsupported icon type", attr.id);
				}
			}
		}

		attr.type ??= "bi";

		if (attr.type === "bi") {
			attr = mergeObject(
				{
					class: ["bi", attr.id ? `bi-${attr.id}` : undefined],
				},
				attr
			);
		}

		//add pointer event to allow click event to bubble up to parent anchor or button element
		attr.pointerEvent ??= "none";

		delete attr.id;
		delete attr.type;
		return super.convert(attr);
	}

	static bi = (i: string, attr?: Icon) => genStaticIcon("bi", i, attr);
}
