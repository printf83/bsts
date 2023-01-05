import { attachFn } from './base.interface.js';

export const attachOther: attachFn = (key, elem, attr) => {
	let i = Array.isArray(attr[key]) ? (attr[key] as []).join(" ") : attr[key];

    elem.setAttribute(key, i.toString());
	delete attr[key];

	return { attr, elem };
}