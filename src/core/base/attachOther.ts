import { attachFn } from './base.interface.js';

export const attachOther: attachFn = (key, elem, opt) => {
	let i = Array.isArray(opt[key]) ? opt[key].join(" ") : opt[key];

    elem.setAttribute(key, i);
	delete opt[key];

	return { opt, elem };
}