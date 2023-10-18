import { keyOfType } from "./../keyOfType.js";
import { attachOther } from "./attachOther.js";
import { attachHref } from "./attachHref.js";
import { attachAria } from "./attachAria.js";
import { attachData } from "./attachData.js";
import { attachBoolean } from "./attachBoolean.js";
import { attachBSAttr, attachBSClass } from "../bootstrap.js";
import { attachBSTSClass } from "../bsts.js";
import { attachEvent, hasBuildAndDestroyEvent } from "./attachEvent.js";
import { attachStyle } from "./attachStyle.js";
import { attachClass } from "./attachClass.js";
import { attachAlias } from "./attachAlias.js";
import { attr } from "../../interface/core/attr.js";

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
	attachBSClass.attach,
	attachBSAttr.attach,
	attachBSTSClass.attach,
	attachEvent,
	attachStyle,
	attachClass,
	attachHref,
	attachOther,
];

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
