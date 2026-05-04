import { getAttrValue, getAllowedKey, setAttributeValue } from "./attachHelpers.js";
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
	if (attr) {
		const allowKey = getAllowedKey(key, formatDB);
		if (allowKey) {
			changed = setAttributeValue(elem, formatDB[allowKey]!, getAttrValue(attr, key));
		}
	}

	return { attr, elem, changed };
};
