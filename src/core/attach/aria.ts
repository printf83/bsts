import { IAttachFn } from "./_index.js";
import { normalizeAttributeValue } from "./attachHelpers.js";

/**
 * Attaches ARIA attributes to the provided element.
 *
 * @param key - The key to check for ARIA attributes.
 * @param elem - The element to attach the ARIA attributes to.
 * @param attr - The attributes object that may contain ARIA attributes.
 *
 * Checks if the 'aria' key contains ARIA attributes, and attaches them to
 * the provided element if so.
 *
 * Returns an object containing the updated element and attributes, and a
 * boolean indicating if any changes were made.
 */
export const attach: IAttachFn = (key, elem, attr) => {
	let changed = false;
	if (key === "aria") {
		if (attr && typeof attr.aria !== "undefined") {
			for (const [key, value] of Object.entries(attr.aria)) {
				const normalizedValue = normalizeAttributeValue(value);
				if (normalizedValue !== undefined) {
					elem.setAttribute(`aria-${key}`, normalizedValue);
				}
			}

			changed = true;
		}
	}

	return { attr, elem, changed };
};
