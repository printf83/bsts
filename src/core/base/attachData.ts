import { attachFn } from "./index.js";

export const attachData: attachFn = (key, elem, attr) => {
	if (key === "data") {
		if (attr && typeof attr.data !== "undefined") {
			let prop = Object.keys(attr.data);
			if (prop) {
				for (let x = 0; x < prop.length; x++) {
					if (attr.data[prop[x]]) {
						elem.setAttribute(`data-${prop[x]}`, attr.data[prop[x]].toString());
					}
				}
			}

			delete attr.data;
		}
	}

	return { attr, elem };
};
