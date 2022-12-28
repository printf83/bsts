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


const cleanupAttr = (key: string, elem: HTMLElement, opt: IBase): IAttachResult => {
    if ((opt[key] === undefined || opt[key]) === null) {
		if (setting.DEBUG) console.log(`${key}:${opt[key]} is null or undefined. Delete it`);
		delete opt[key];
	} else {
		if (setting.DEBUG) console.log(`${key}:${opt[key]} isNot null and undefined`);
	}

	return { opt, elem };
}

const notAttr = ["tag", "elem"];
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
const fnAttr = {
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


