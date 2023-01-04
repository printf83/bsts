import { attachFn } from './base.interface.js';
export const attachData: attachFn = (key, elem, opt) => {
	if (key.startsWith("data")) {
		elem.setAttribute(
			key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()),
			opt[key]
		);

		delete opt[key];
	}

	return { opt, elem };
}