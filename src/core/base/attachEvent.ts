import { deleteEventListener } from "../fn/deleteEventListener.js";
import { setupEventListenerRemover } from "../fn/setupEventListenerRemover.js";
import { attachFn } from "./index.js";

export const attachEvent: attachFn = (key, elem, attr) => {
	if (key === "on") {
		if (attr && typeof attr.on !== "undefined") {
			let prop = Object.keys(attr.on);
			if (prop) {
				for (let x = 0; x < prop.length; x++) {
					if (typeof attr.on[prop[x]] === "function") {
						addEvent(elem, prop[x], attr.on[prop[x]]!);
					}
				}
			}

			delete attr.on;
		}
	}

	return { attr, elem };
};

const addEvent = (elem: HTMLElement, key: string, fn: EventListener) => {
	elem.addEventListener(key, fn, false);
	setupEventListenerRemover(key, elem, () => {
		deleteEventListener(key, elem, () => {
			elem.removeEventListener(key, fn, false);
		});
	});
};
