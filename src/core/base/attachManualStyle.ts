import { attachFn } from './base.interface.js';

export const attachManualStyle: attachFn = (key, elem, attr) => {
	if (key === "style") {
		let styleKeys = Object.keys(attr[key]);
		if (styleKeys) {
			for (let x = 0; x < styleKeys.length; x++) {
				if (attr[key][styleKeys[x]]) {
					elem.style.setProperty(styleKeys[x], attr[key][styleKeys[x]]);
				}
			}
		}

		delete attr[key];
	}

	return { attr, elem };
}