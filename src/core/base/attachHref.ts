import { type } from "os";
import { attachFn } from "./index.js";

export const attachHref: attachFn = (key, elem, attr) => {
	if (key === "href") {
		if (attr && typeof attr.href !== "undefined") {
			let i = Array.isArray(attr.href) ? attr.href.join(" ") : attr.href;

			if (i === "#") {
				elem.setAttribute("href", "javascript:void(0);");
			} else {
				elem.setAttribute("href", i);
			}

			delete attr.href;
		}
	}

	return { attr, elem };
};
