import { IAttachFn } from "./_index.js";

/**
 * Attaches data attributes to the provided element based on the given attribute data.
 *
 * Checks if the 'data' key is present in the attributes, and if so loops through the data
 * properties and sets them as data attributes on the element.
 *
 * Returns an object containing the updated element, original attributes, and a flag
 * indicating if any changes were made.
 */
export const attach: IAttachFn = (key, elem, attr) => {
	let changed = false;
	if (key === "data") {
		if (attr && typeof attr.data !== "undefined") {
			for (const [key, value] of Object.entries(attr.data)) {
				if (value !== undefined) {
					elem.setAttribute(`data-${key}`, value.toString());
				}
			}

			changed = true;
		}
	}

	return { attr, elem, changed };
};
