import { keyOfType } from "./../fn/keyOfType.js";
import { attachOther } from "./attachOther.js";
import { attachHref } from "./attachHref.js";
import { attachAria } from "./attachAria.js";
import { attachData } from "./attachData.js";
import { attachBoolean } from "./attachBoolean.js";
// import { attachDisabled } from "./attachDisabled.js";
// import { attachActive } from "./attachActive.js";
import { setting } from "../fn/setting.js";
import { attachBootstrap } from "./attachBootstrap.js";
import { attachEvent } from "./attachEvent.js";
import { attachStyle } from "./attachStyle.js";
import { attachClass } from "./attachClass.js";
import { attachAlias } from "./attachAlias.js";
import { extend } from "../fn/extend.js";
import { IAttr } from "../base/tag.js";

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
		if (setting.DEBUG) console.log(`${key}:${attr[k]} is null. Delete it`);
		delete attr[k];
	}

	return { attr, elem };
};

const attrFn: IAttachFn[] = [
	cleanupAttr,
	attachAlias,
	// attachActive,
	// attachDisabled,
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
		attr = extend({}, attr);

		let prop = Object.keys(attr);
		if (prop) {
			let propLength = prop.length;
			let attrFnLength = attrFn.length;

			for (let x = 0; x < propLength; x++) {
				for (let y = 0; y < attrFnLength; y++) {
					let k = keyOfType(prop[x], attr);

					if (typeof attr[k] !== "undefined" && attr[k] !== null) {
						if (y === attrFnLength - 1 && setting.DEBUG) {
							console.log(
								`Treat ${prop[x]}:${attr[k]} as another attribute.`
							);
						}

						let { elem: e, attr: a } = attrFn[y](
							prop[x],
							elem,
							attr
						);
						elem = e;
						attr = a;
					}
				}
			}
		}
	}

	return elem;
};
