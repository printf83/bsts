import { keyOfType } from "./../fn/keyOfType";
import { attachFn } from "./index.js";

export const attachOther: attachFn = (key, elem, attr) => {
	if (attr && typeof attr !== "undefined") {
		let k = keyOfType(key, attr);
		let i = Array.isArray(attr[k]) ? attr[k] : attr[k];
		elem.setAttribute(key, i!.toString());
		delete attr[k];
	}

	return { attr, elem };
};
