import { getAttrValue } from "./attachHelpers.js";
import { IAttachFn } from "./_index.js";

/**
 * Attaches a key-value attribute to the provided element.
 * Checks if the key and attr are valid, gets the correct attribute key based on the attr type,
 * sets the attribute on the element, and returns an object indicating if the attribute changed.
 */
export const attach: IAttachFn = (key, elem, attr) => {
	let changed = false;

	if (key && attr) {
		const value = getAttrValue(attr, key);
		if (value !== undefined && value !== null) {
			const normalizedValue = Array.isArray(value) ? value.join(" ") : value.toString();
			elem.setAttribute(key, normalizedValue);
			changed = true;
		}
	}

	return { attr, elem, changed };
};
