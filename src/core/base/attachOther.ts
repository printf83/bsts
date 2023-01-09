import { attachFn } from "./index.js";

export const attachOther: attachFn = (key, elem, attr) => {
	if (attr && typeof attr !== "undefined") {
		let i = Array.isArray(attr[key]) ? attr[key].join(" ") : attr[key];
		elem.setAttribute(key, i.toString());
		delete attr[key];
	}

	return { attr, elem };
};
