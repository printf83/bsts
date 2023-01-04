import { IBase } from './../../../lib/core/base/base.interface.d';
import { attachOther } from './attachOther.js';
import { attachHref } from './attachHref.js';
import { attachAria } from './attachAria.js';
import { attachData } from './attachData.js';
import { attachBoolean } from './attachBoolean.js';
import { attachDisabled } from './attachDisabled.js';
import { attachActive } from './attachActive.js';
import { setting } from '../fn/setting.js';
import { attachFn, tag } from './base.interface.js';
import { attachBootstrap } from './attachBootstrap.js';
import { attachEvent } from './attachEvent.js';
import { attachStyle } from './attachStyle.js';
import { attachManualStyle } from './attachManualStyle.js';
import { attachClass } from './attachClass.js';
import { extend } from '../fn/extend.js';


const cleanupAttr: attachFn = (key, elem, opt) => {
    if ((opt[key] === undefined || opt[key]) === null) {
		if (setting.DEBUG) console.log(`${key}:${opt[key]} is null or undefined. Delete it`);
		delete opt[key];
	} else {
		if (setting.DEBUG) console.log(`${key}:${opt[key]} isNot null and undefined`);
	}

	return { opt, elem };
}

const notAttr = ["tag", "elem", "dom"];

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



export const attachAttr = (elem:HTMLElement, opt:IBase):HTMLElement =>{
	let data = extend(opt);

	let keys = Object.keys(data);
	if (keys) {
		
		let keyLength = keys.length;
		let attrFnLength = attrFn.length;

		for (let x = 0; x < keyLength; x++) {
			if (notAttr.indexOf(keys[x]) === -1) {
				for (let y = 0; y < attrFnLength; y++) {
					if (data.hasOwnProperty(keys[x]) && data[keys[x]] !== null && data[keys[x]] !== undefined) {
						if (y === attrFnLength - 1) {
							if (setting.DEBUG) {
								console.log(`Treat ${keys[x]}:${data[keys[x]]} as another attribute.`);
							}
						}

						let r = attrFn[y](keys[x], elem, data);
						data = r.opt;
						elem = r.elem;
					}
				}
			}
		}
	}

	return elem;
}