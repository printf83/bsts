import { attachOther } from './attachOther.js';
import { attachHref } from './attachHref.js';
import { attachAria } from './attachAria.js';
import { attachData } from './attachData.js';
import { attachBoolean } from './attachBoolean.js';
import { attachDisabled } from './attachDisabled.js';
import { attachActive } from './attachActive.js';
import { setting } from '../fn/setting.js';
import { attachFn, baseAttr } from './base.interface.js';
import { attachBootstrap } from './attachBootstrap.js';
import { attachEvent } from './attachEvent.js';
import { attachStyle } from './attachStyle.js';
import { attachManualStyle } from './attachManualStyle.js';
import { attachClass } from './attachClass.js';
import { extend } from '../fn/extend.js';


const cleanupAttr: attachFn = (key, elem, attr) => {
    if ((attr[key] === undefined || attr[key]) === null) {
		if (setting.DEBUG) console.log(`${key}:${attr[key]} is null or undefined. Delete it`);
		delete attr[key];
	}

	return { attr, elem };
}

const attrFn:attachFn[] = [
	cleanupAttr,
    attachActive,
    attachDisabled,
	attachBoolean,
	attachData,
	attachAria,
	attachBootstrap,
	attachEvent,
	attachStyle,
	attachManualStyle,
	attachClass,
	attachHref,
	attachOther
];


export const attachAttr = (elem: HTMLElement, attr: baseAttr): HTMLElement => {
	if (attr) {
		attr = extend(attr);

		let keys = Object.keys(attr);
		if (keys) {
			
			let keyLength = keys.length;
			let attrFnLength = attrFn.length;

			for (let x = 0; x < keyLength; x++) {
				for (let y = 0; y < attrFnLength; y++) {
						if (attr.hasOwnProperty(keys[x]) && attr[keys[x]] !== null && attr[keys[x]] !== undefined) {
							if (y === attrFnLength - 1) {
								if (setting.DEBUG) {
									console.log(`Treat ${keys[x]}:${attr[keys[x]]} as another attribute.`);
								}
							}

							let r = attrFn[y](keys[x], elem, attr);
							attr = r.attr;
							elem = r.elem;
						}
					}
			}
		}	
	}
	

	return elem;
}