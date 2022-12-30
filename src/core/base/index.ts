import { attachHref } from './attachHref';
import { attachAria } from './attachAria';
import { attachData } from './attachData';
import { attachBoolean } from './attachBoolean';
import { attachDisabled } from './attachDisabled';
import { attachActive } from './attachActive';
import { setting } from '../fn/setting';
import { IBase, IAttachResult } from './base.interface';
import { attachBootstrap } from './attachBootstrap';
import { attachEvent } from './attachEvent';
import { attachStyle } from './attachStyle';
import { attachManualStyle } from './attachManualStyle';
import { attachClass } from './attachClass';
import { extend } from '../fn/extend';


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