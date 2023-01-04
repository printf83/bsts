import { attachFn } from './base.interface.js';
export const attachAria: attachFn = (key, elem, opt) => {
	if (key.startsWith("aria")) {
		elem.setAttribute(
			key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()),
			opt[key]
		);

		delete opt[key];
	}

	return { opt, elem };
}