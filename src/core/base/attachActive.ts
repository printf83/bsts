import { addIntoClassList } from "../fn/addIntoClassList.js";
import { attachFn } from "./index.js";

export const attachActive: attachFn = (key, elem, attr) => {
	if (key === "active") {
		if (attr && typeof attr.active !== "undefined" && attr.active === true) {
			elem = addIntoClassList(elem, "active");
			delete attr.active;
		}
	}

	return { attr, elem };
};
