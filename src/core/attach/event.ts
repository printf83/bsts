import { attr } from "../../interface/core/attr.js";
import { addEvent, ElementWithAbortController } from "../util/eventManager.js";
import { IAttachFn } from "./_index.js";

export const attach: IAttachFn = (key, elem, attr) => {
	let changed = false;
	if (key === "on") {
		if (attr && typeof attr.on !== "undefined") {
			let prop = Object.keys(attr.on);
			if (prop && prop.length > 0) {
				for (let x = 0; x < prop.length; x++) {
					if (typeof attr.on[prop[x]!] === "function") {
						addEvent(prop[x]!, elem as ElementWithAbortController, attr.on[prop[x]!]!);
					}
				}
			}

			changed = true;
		}
	}

	return { attr, elem, changed };
};

export const hasBuildAndDestroyEvent = (attr: attr) => {
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
