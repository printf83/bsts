import { attr } from "../../interface/core/attr.js";
import { addEvent, ElementWithAbortController } from "../util/eventManager.js";
import { IAttachFn } from "./_index.js";

/**
 * Attaches event handlers from the 'on' field of the given attribute
 * object to the provided DOM element.
 *
 * Checks if the attr object has an 'on' field with event handler functions.
 * Loops through and adds each event handler to the element using the
 * addEvent utility.
 *
 * Returns an object indicating whether the attr object was modified,
 * the updated element, and a boolean indicating if any changes were made.
 */
export const attach: IAttachFn = (key, elem, attr) => {
	let changed = false;
	if (key === "on") {
		if (attr && typeof attr.on !== "undefined") {
			for (const [eventName, value] of Object.entries(attr.on)) {
				if (typeof value === "function") {
					addEvent(eventName, elem as ElementWithAbortController, value);
				}
			}

			changed = true;
		}
	}

	return { attr, elem, changed };
};

/**
 * Checks if the given attribute object contains 'on' event handlers for the 'build' and 'destroy' events.
 *
 * Loops through the 'on' event handlers on the attribute and checks if 'build' and 'destroy' handlers exist.
 *
 * Returns an object indicating whether 'build' and 'destroy' handlers were found.
 */
export const hasBuildAndDestroyEvent = (attr: attr) => {
	let hasBuild = false;
	let hasDestroy = false;

	if (attr && typeof attr.on !== "undefined") {
		const eventKeys = Object.keys(attr.on);
		hasBuild = eventKeys.includes("build");
		hasDestroy = eventKeys.includes("destroy");
	}

	return { hasBuild, hasDestroy };
};
