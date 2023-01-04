import { attachFn } from './base.interface.js';

export const attachOther: attachFn = (key, elem, attr) => {
	let i = Array.isArray(attr[key]) ? attr[key].join(" ") : attr[key];

    elem.setAttribute(key, i);
	delete attr[key];

	return { attr, elem };
}