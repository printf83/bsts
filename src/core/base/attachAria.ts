import { attachFn } from "./index.js";

export const attachAria: attachFn = (key, elem, attr) => {
	if (key.startsWith("aria")) {
		elem.setAttribute(
			key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()),
			attr[key].toString()
		);

		delete attr[key];
	}

	return { attr, elem };
};
