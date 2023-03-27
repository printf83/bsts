import { keyOfType } from "./../keyOfType.js";
import { attachOther } from "./attachOther.js";
import { attachHref } from "./attachHref.js";
import { attachAria } from "./attachAria.js";
import { attachData } from "./attachData.js";
import { attachBoolean } from "./attachBoolean.js";
import { attachBootstrap } from "./attachBootstrap.js";
import { attachEvent } from "./attachEvent.js";
import { attachStyle } from "./attachStyle.js";
import { attachClass } from "./attachClass.js";
import { attachAlias } from "./attachAlias.js";
import { IAttr } from "../tag.js";

export type IAttachFn = (
	key: string,
	elem: HTMLElement,
	attr: IAttr
) => {
	elem: HTMLElement;
	attr: IAttr;
};

const cleanupAttr: IAttachFn = (key, elem, attr) => {
	let k = keyOfType(key, attr);

	if (attr && typeof attr[k] !== "undefined" && attr[k] === null) {
		delete attr[k];
	}

	return { attr, elem };
};

const attrFn: IAttachFn[] = [
	cleanupAttr,
	attachAlias,
	attachBoolean,
	attachData,
	attachAria,
	attachBootstrap,
	attachEvent,
	attachStyle,
	attachClass,
	attachHref,
	attachOther,
];

export const attachAttr = (elem: HTMLElement, attr: IAttr): HTMLElement => {
	if (attr) {
		let d = Object.assign({}, attr);

		let prop = Object.keys(d);
		if (prop) {
			let propLength = prop.length;
			let attrFnLength = attrFn.length;

			for (let x = 0; x < propLength; x++) {
				for (let y = 0; y < attrFnLength; y++) {
					let k = keyOfType(prop[x], d);

					if (typeof d[k] !== "undefined" && d[k] !== null) {
						let { elem: e, attr: a } = attrFn[y](prop[x], elem, d);
						elem = e;
						d = a;
					}
				}
			}
		}
	}

	return elem;
};
