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

const attrFn: IAttachFn[] = [
	cleanupAttr,
	attachAlias,
	attachBoolean,
	attachData,
	attachAria,
	attachBSClass,
	attachBSAttr,
	attachBSTS,
	attachEvent,
	attachStyle,
	attachClass,
	attachHref,
	attachOther,
];

/**
 * Attaches attributes to the given element based on the given attribute
 * object. It handles various special cases like events, styles, classes etc.
 *
 * It loops through the keys in the attribute object, and passes each key/value
 * pair through the attrFn array of handler functions. This allows each handler
 * to transform the attribute as needed.
 *
 * The element and updated attribute object are returned after being mutated
 * by the handler functions.
 */
export const attachAttr = (elem: Element, attr: attr): Element => {
	if (attr) {
		let d = Object.assign({}, attr);

		//add hasdestroy and hasbuild
		let { hasBuild, hasDestroy } = hasBuildAndDestroyEvent(d);
		if (hasBuild || hasDestroy) {
			if (d.class) {
				if (Array.isArray(d.class)) {
					if (hasBuild) d.class.push("bs-build-event");
					if (hasDestroy) d.class.push("bs-destroy-event");
				} else {
					let o = d.class.split(" ");
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

		//convert to attribute
		let prop = Object.keys(d);
		if (prop) {
			let propLength = prop.length;
			let attrFnLength = attrFn.length;

			for (let x = 0; x < propLength; x++) {
				let handleByAttrFn = false;
				let k = keyOfType(prop[x], d);

				for (let y = 0; y < attrFnLength; y++) {
					if (typeof d[k] !== "undefined" && d[k] !== null) {
						if (y === attrFnLength - 1 && handleByAttrFn) {
							break;
						}

						let { elem: e, attr: a, changed: c } = attrFn[y]!(prop[x], elem, d);
						if (c) {
							handleByAttrFn = true;
							elem = e;
							d = a;
						}
					} else {
						break;
					}
				}
			}
		}
	}

	return elem;
};
