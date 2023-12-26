import { IAttachFn } from "./_index.js";

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
			let prop = Object.keys(attr.aria);
			if (prop && prop.length > 0) {
				for (let x = 0; x < prop.length; x++) {
					if (attr.aria[prop[x]!] !== undefined) {
						elem.setAttribute(`aria-${prop[x]}`, attr.aria[prop[x]!]!.toString());
					}
				}
			}

			changed = true;
		}
	}

	return { attr, elem, changed };
};
