import { deleteEventListener } from "../fn/deleteEventListener.js";
import { setupEventListenerRemover } from "../fn/setupEventListenerRemover.js";
import { attachFn } from "./index.js";

export const attachEvent: attachFn = (key, elem, attr) => {
	if (key === "on") {
		if (attr && attr.on) {
			let prop = Object.keys(attr.on);
			if (prop) {
				for (let x = 0; x < prop.length; x++) {
					if (typeof attr.on[prop[x]] === "function") {
						elem.addEventListener(key, attr.on[prop[x]], false);

						setupEventListenerRemover(key, elem, () => {
							deleteEventListener(key, elem, () => {
								elem.removeEventListener(key, attr.on[prop[x]], false);
							});
						});
					}
				}
			}

			delete attr.on;
		}
	}

	return { attr, elem };
};
