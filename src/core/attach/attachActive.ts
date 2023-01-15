import { addClassIntoElement } from "../fn/addClassIntoElement.js";
import { IAttachFn } from "./_index.js";

export const attachActive: IAttachFn = (key, elem, attr) => {
	if (key === "active") {
		if (attr && typeof attr.active !== "undefined" && attr.active === true) {
			elem = addClassIntoElement(elem, "active");
			delete attr.active;
		}
	}

	return { attr, elem };
};
