import { addEvent, ElementWithAbortController } from "../eventManager.js";
import { IAttr } from "../tag.js";
import { IAttachFn } from "./_index.js";

export const attachEvent: IAttachFn = (key, elem, attr) => {
	let changed = false;
	if (key === "on") {
		if (attr && typeof attr.on !== "undefined") {
			let prop = Object.keys(attr.on);
			if (prop && prop.length > 0) {
				for (let x = 0; x < prop.length; x++) {
					if (typeof attr.on[prop[x]] === "function") {
						addEvent(prop[x], elem as ElementWithAbortController, attr.on[prop[x]]!);
					}
				}
			}

			delete attr.on;
			changed = true;
		}
	}

	return { attr, elem, changed };
};

export const hasBuildAndDestroyEvent = (attr: IAttr) => {
	let hasBuild = false;
	let hasDestroy = false;

	if (attr && typeof attr.on !== "undefined") {
		let prop = Object.keys(attr.on);
		if (prop && prop.length > 0) {
			hasDestroy = true;
			if (prop.indexOf("build") > -1) {
				hasBuild = true;
			}
		}
	}

	return { hasBuild, hasDestroy };
};
