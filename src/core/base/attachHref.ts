import { attachFn } from './base.interface.js';
export const attachHref: attachFn = (key, elem, attr) => {
    let i = Array.isArray(attr[key]) ? (attr[key] as []).join(" ") : attr[key];
	
	if (key === "href" && i === "#") {
		elem.setAttribute(key, "javascript:void(0);");
		delete attr[key];
	}

	return { attr, elem };
}