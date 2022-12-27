import { IBase, IAttachResult } from './../base.interface';
import { setting } from "src/core/fn/setting.js";
import { db } from "./var.js";

export const attachBoolean = (key:string, elem:HTMLElement, opt:IBase):IAttachResult => {
	if (db.indexOf(key) > -1) {
		if (opt[key] === true) {
			elem.setAttribute(key, key);
			// elem[key] = true;
		} else if (opt[key] === false) {
			// elem.setAttribute(key, "");
			// elem[key] = false;
		} else {
			if (setting.DEBUG) console.log(`Attribute ${key}:${opt[key]} is not TRUE`);
		}

		delete opt[key];
	}

	return { opt, elem };
}