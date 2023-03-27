import { addClassIntoElement } from "../addClassIntoElement.js";
import { IAttachFn } from "./_index.js";

export const attachClass: IAttachFn = (key, elem, attr) => {
	if (key === "class") {
		if (attr && typeof attr.class !== "undefined") {
			elem = addClassIntoElement(elem, attr.class);
			delete attr.class;
		}
	}

	return { attr, elem };
};
