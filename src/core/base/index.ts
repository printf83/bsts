import { attachHref } from './attachHref.js';
import { attachAria } from './attachAria.js';
import { attachData } from './attachData.js';
import { attachBoolean } from './attachBoolean.js';
import { attachDisabled } from './attachDisabled.js';
import { attachActive } from './attachActive.js';
import { setting } from '../fn/setting.js';
import { IBase, IAttachResult } from './base.interface.js';
import { attachBootstrap } from './attachBootstrap.js';
import { attachEvent } from './attachEvent.js';
import { attachStyle } from './attachStyle.js';
import { attachManualStyle } from './attachManualStyle.js';
import { attachClass } from './attachClass.js';
import { extend } from '../fn/extend.js';


const cleanupAttr = (key: string, elem: HTMLElement, opt: IBase): IAttachResult => {
    if ((opt[key] === undefined || opt[key]) === null) {
		if (setting.DEBUG) console.log(`${key}:${opt[key]} is null or undefined. Delete it`);
		delete opt[key];
	} else {
		if (setting.DEBUG) console.log(`${key}:${opt[key]} isNot null and undefined`);
	}

	return { opt, elem };
}

const notAttr = ["tag", "elem","dom"];
const attrDB = [
	"cleanupAttr",
    "attachActive",
    "attachDisabled",
	"attachBoolean",
	"attachData",
	"attachAria",
	"attachBootstrap",
	"attachEvent",
	"attachStyle",
	"attachManualStyle",
	"attachClass",
	"attachHref",
];
const attrFn = {
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
};

export const attachAttr = (elem:HTMLElement, opt:IBase):HTMLElement =>{
	opt = extend(opt);

	let keys = Object.keys(opt);
	if (keys) {
		
		let keyLength = keys.length;
		let attrDBLength = attrDB.length;

		for (let x = 0; x < keyLength; x++) {
			if (notAttr.indexOf(keys[x]) === -1) {
				for (let y = 0; y < attrDBLength; y++) {
					if (opt.hasOwnProperty(keys[x]) && opt[keys[x]] !== null && opt[keys[x]] !== undefined) {
						if (y === attrDBLength - 1) {
							if (setting.DEBUG) {
								console.log(`Treat ${keys[x]}:${opt[keys[x]]} as another attribute.`);
							}
						}

						let r = attrFn[attrDB[y]](keys[x], elem, opt);
						opt = r.opt;
						elem = r.elem;
					}
				}
			}
		}
	}

	return elem;
}