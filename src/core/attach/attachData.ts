import { IAttachFn } from "./_index.js";

export const attachData: IAttachFn = (key, elem, attr) => {
	let changed = false;
	if (key === "data") {
		if (attr && typeof attr.data !== "undefined") {
			let prop = Object.keys(attr.data);
			if (prop && prop.length > 0) {
				for (let x = 0; x < prop.length; x++) {
					if (attr.data[prop[x]!] !== undefined) {
						elem.setAttribute(`data-${prop[x]}`, attr.data[prop[x]!]!.toString());
					}
				}
			}

			changed = true;
		}
	}

	return { attr, elem, changed };
};
