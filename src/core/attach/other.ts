import { keyOfType } from "./../util/keyOfType.js";
import { IAttachFn } from "./_index.js";

/**
 * Attaches a key-value attribute to the provided element.
 * Checks if the key and attr are valid, gets the correct attribute key based on the attr type,
 * sets the attribute on the element, and returns an object indicating if the attribute changed.
 */
export const attach: IAttachFn = (key, elem, attr) => {
	let changed = false;

	if (key && attr && typeof attr !== "undefined") {
		let k = keyOfType(key, attr);
		let i = Array.isArray(attr[k]) ? attr[k] : attr[k];
		elem.setAttribute(key, i!.toString());
		changed = true;
	}

	return { attr, elem, changed };
};
