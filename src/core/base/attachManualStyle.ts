import { attachFn } from './base.interface.js';

export const attachManualStyle: attachFn = (key, elem, opt) => {
	if (key === "style") {
		let styleKeys = Object.keys(opt[key]);
		if (styleKeys) {
			for (let x = 0; x < styleKeys.length; x++) {
				if (opt[key][styleKeys[x]]) {
					elem.style.setProperty(styleKeys[x], opt[key][styleKeys[x]]);
				}
			}
		}

		delete opt[key];
	}

	return { opt, elem };
}