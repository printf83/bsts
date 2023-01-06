import { attachFn } from "./index.js";

export const attachData: attachFn = (key, elem, attr) => {
	if (key.startsWith("data")) {
		elem.setAttribute(
			key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()),
			attr[key]!.toString()
		);

		delete attr[key];
	}

	return { attr, elem };
};
