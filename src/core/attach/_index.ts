import { keyOfType } from "./../util/keyOfType.js";

import { attr } from "../../interface/core/attr.js";
import { attach as attachOther } from "./other.js";
import { attach as attachHref } from "./href.js";
import { attach as attachAria } from "./aria.js";
import { attach as attachData } from "./data.js";
import { attach as attachBoolean } from "./boolean.js";
import { attach as attachBSTS } from "./bsts.js";
import { attach as attachEvent, hasBuildAndDestroyEvent } from "./event.js";
import { attach as attachStyle } from "./style.js";
import { attach as attachClass } from "./class.js";
import { attach as attachAlias } from "./alias.js";
import { attach as attachBSAttr } from "./bsAttr.js";
import { attach as attachBSClass } from "./bsClass.js";

export type IAttachFn = (
	key: string | undefined,
	elem: Element,
	attr: attr
) => {
	elem: Element;
	attr: attr;
	changed: boolean;
};

const cleanupAttr: IAttachFn = (key, elem, attr) => {
	let changed = false;
	let k = keyOfType(key, attr);
	if (attr && typeof attr[k] !== "undefined" && attr[k] === null) {
		delete attr[k];
		changed = true;
	}

	return { attr, elem, changed };
};

const attachHandlerCategories = [
	{
		category: "cleanup",
		handlers: [cleanupAttr],
	},
	{
		category: "alias",
		handlers: [attachAlias],
	},
	{
		category: "boolean",
		handlers: [attachBoolean],
	},
	{
		category: "data",
		handlers: [attachData, attachAria],
	},
	{
		category: "bootstrap",
		handlers: [attachBSClass, attachBSAttr, attachBSTS],
	},
	{
		category: "dom",
		handlers: [attachEvent, attachStyle, attachClass, attachHref],
	},
	{
		category: "fallback",
		handlers: [attachOther],
	},
];

/**
 * Attaches attributes to the given element based on the given attribute
 * object. It handles various special cases like events, styles, classes etc.
 *
 * It loops through the keys in the attribute object, and passes each key/value
 * pair through the assembled handler categories. This makes the pipeline
 * order and intent explicit while preserving the existing behavior.
 *
 * The element and updated attribute object are returned after being mutated
 * by the handler functions.
 */
export const attachAttr = (elem: Element, attr: attr): Element => {
	if (attr) {
		let d = { ...attr };

		// add hasdestroy and hasbuild
		const { hasBuild, hasDestroy } = hasBuildAndDestroyEvent(d);
		if (hasBuild || hasDestroy) {
			if (d.class) {
				if (Array.isArray(d.class)) {
					if (hasBuild) d.class.push("bs-build-event");
					if (hasDestroy) d.class.push("bs-destroy-event");
				} else {
					const o = d.class.split(" ");
					if (hasBuild) o.push("bs-build-event");
					if (hasDestroy) o.push("bs-destroy-event");
					d.class = o.join(" ");
				}
			} else {
				d.class = [];
				if (hasBuild) d.class.push("bs-build-event");
				if (hasDestroy) d.class.push("bs-destroy-event");
			}
		}

		// convert to attribute
		for (const key of Object.keys(d)) {
			let k = keyOfType(key, d);
			let handled = false;

			for (const category of attachHandlerCategories) {
				for (const fn of category.handlers) {
					if (typeof d[k] !== "undefined" && d[k] !== null) {
						const { elem: e, attr: a, changed: c } = fn(key, elem, d);
						elem = e;
						d = a;
						if (c) {
							handled = true;
							break;
						}
					} else {
						break;
					}
				}

				if (handled) {
					break;
				}
			}
		}
	}

	return elem;
};
