import { addClassIntoElement } from "../addClassIntoElement.js";
import { IAttachFn } from "./_index.js";

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
