import { attachHref } from './attachHref';
import { attachAria } from './attachAria';
import { attachData } from './attachData';
import { attachBoolean } from './boolean/index';
import { attachDisabled } from './attachDisabled';
import { attachActive } from './attachActive';
import { setting } from '../fn/setting.js';
import { IBase, IAttachResult } from './base.interface';
import { attachBootstrap } from './bs/index.js';
import { attachEvent } from './attachEvent.js';
import { attachStyle } from './style/index.js';
import { attachManualStyle } from './attachManualStyle.js';
import { attachClass } from './attachClass.js';

const notAttr = ["tag", "elem"];
const cleanupAttr = (key: string, elem: HTMLElement, opt: IBase): IAttachResult => {
    if ((opt[key] === undefined || opt[key]) === null) {
		if (setting.DEBUG) console.log(`${key}:${opt[key]} is null or undefined. Delete it`);
		delete opt[key];
	} else {
		if (setting.DEBUG) console.log(`${key}:${opt[key]} isNot null and undefined`);
	}

	return { opt, elem };
}

const fnAttach = {
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
