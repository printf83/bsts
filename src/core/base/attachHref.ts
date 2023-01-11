import { IAttachFn, IAttrHref } from "./index.js";

export const attachHref: IAttachFn = (key, elem, attr: IAttrHref) => {
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
