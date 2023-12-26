import { attr } from "../../interface/core/attr.js";
import { IAttachFn } from "./_index.js";

const CONVERTHASHTOVOID = true;

interface IAttrHref extends attr {
	href?: string;
}

/**
 * Attaches a handler for the 'href' attribute.
 * Checks if href is present on attr and handles converting '#' to void link.
 * Returns object with updated attr, elem and changed flag.
 */
export const attach: IAttachFn = (key, elem, attr: IAttrHref) => {
	let changed = false;
	if (key === "href") {
		if (attr && typeof attr.href !== "undefined") {
			let i = Array.isArray(attr.href) ? attr.href.join(" ") : attr.href;

			if (CONVERTHASHTOVOID) {
				if (i === "#") {
					elem.setAttribute("rel", "nofollow");
					elem.setAttribute("href", "javascript:void(0);");
				} else {
					elem.setAttribute("href", i);
				}
			} else {
				elem.setAttribute("href", i);
			}

			changed = true;
		}
	}

	return { attr, elem, changed };
};
