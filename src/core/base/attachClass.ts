import { addIntoClassList } from "../fn/addIntoClassList.js";
import { IAttachFn } from "./index.js";

export const attachClass: IAttachFn = (key, elem, attr) => {
	if (key === "class") {
		if (attr && typeof attr.class !== "undefined") {
			elem = addIntoClassList(elem, attr.class);
			delete attr.class;
		}
	}

	return { attr, elem };
};
