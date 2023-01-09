import { attachFn } from "./index.js";

export const attachAria: attachFn = (key, elem, attr) => {
	if (key === "aria") {
		if (attr && attr.aria) {
			let prop = Object.keys(attr.aria);
			if (prop) {
				for (let x = 0; x < prop.length; x++) {
					if (attr.aria[prop[x]]) {
						elem.setAttribute(`aria-${prop[x]}`, attr.aria[prop[x]].toString());
					}
				}
			}

			delete attr.aria;
		}
	}

	return { attr, elem };
};
