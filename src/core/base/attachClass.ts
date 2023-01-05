import { addIntoClassList } from "../fn/addIntoClassList.js";
import { attachFn } from "./index.js";

export const attachClass: attachFn = (key, elem, attr) => {
	if (key === "class") {
		elem = addIntoClassList(elem, attr[key]);
		delete attr[key];
	}

	return { attr, elem };
};
