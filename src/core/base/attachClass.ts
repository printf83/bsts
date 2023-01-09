import { addIntoClassList } from "../fn/addIntoClassList.js";
import { attachFn } from "./index.js";

export const attachClass: attachFn = (key, elem, attr) => {
	if (key === "class") {
		if (attr && typeof attr.class !== "undefined") {
			elem = addIntoClassList(elem, attr.class);
			delete attr.class;
		}
	}

	return { attr, elem };
};
