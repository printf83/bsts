import { addClassIntoElement } from "../util/addClassIntoElement.js";
import { IAttachFn } from "./_index.js";

/**
 * Attaches a class name from the attrs object to the element.
 * Checks if attrs has a 'class' property, and if so, calls
 * addClassIntoElement() to add that class to elem.
 * Returns an object with the (possibly modified) attrs,
 * element, and a boolean indicating if the element was changed.
 */
export const attach: IAttachFn = (key, elem, attr) => {
	let changed = false;
	if (key === "class") {
		if (attr && typeof attr.class !== "undefined") {
			elem = addClassIntoElement(elem, attr.class);

			changed = true;
		}
	}

	return { attr, elem, changed };
};
