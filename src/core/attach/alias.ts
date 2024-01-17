import { keyOfType } from "../util/keyOfType.js";
import { IAttachFn } from "./_index.js";

const formatDB: { [key: string]: string } = {
	loadingStyle: "loading",
	dataText: "data",
	startValue: "start",
	attrLabel: "label",
	attrWidth: "width",
	attrHeight: "height",
};

/**
 * Attach a data attribute to the DOM element.
 *
 * This takes a key, DOM element, and data attributes object. It will look up the key in the formatDB
 * object to find the corresponding data attribute name, and set that attribute on the element to the
 * value from the data attributes object.
 *
 * Returns an object indicating if the attribute was changed, along with the updated element and attributes.
 */
export const attach: IAttachFn = (key, elem, attr) => {
	let changed = false;
	if (key && attr && typeof attr !== "undefined") {
		if (key in formatDB) {
			let a = keyOfType(key, attr);
			let b = keyOfType(key, formatDB);
			if (typeof attr[a] !== "undefined") {
				elem.setAttribute(formatDB[b]!, attr[a]!.toString());
				changed = true;
			}

			return { attr, elem, changed };
		}
	}

	return { attr, elem, changed };
};
