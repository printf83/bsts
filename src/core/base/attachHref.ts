import { attachFn } from './base.interface.js';
export const attachHref: attachFn = (key, elem, opt) => {
    let i = Array.isArray(opt[key]) ? opt[key].join(" ") : opt[key];
	
	if (key === "href" && i === "#") {
		elem.setAttribute(key, "javascript:void(0);");
		delete opt[key];
	}

	return { opt, elem };
}