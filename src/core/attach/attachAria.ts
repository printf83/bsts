import { IAttachFn } from "./_index.js";

export const attachAria: IAttachFn = (key, elem, attr) => {
	let changed = false;
	if (key === "aria") {
		if (attr && typeof attr.aria !== "undefined") {
			let prop = Object.keys(attr.aria);
			if (prop && prop.length > 0) {
				for (let x = 0; x < prop.length; x++) {
					if (attr.aria[prop[x]] !== undefined) {
						elem.setAttribute(`aria-${prop[x]}`, attr.aria[prop[x]]!.toString());
					}
				}
			}

			changed = true;
		}
	}

	return { attr, elem, changed };
};
