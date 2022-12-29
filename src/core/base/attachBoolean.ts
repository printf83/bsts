import { setting } from "../fn/setting";
import { IAttachResult, IBase } from "./base.interface";

const db = [
	"allowfullscreen",
	"allowpaymentrequest",
	"async",
	"autofocus",
	"autoplay",
	"checked",
	"indeterminate",
	"controls",
	"default",
	"defer",
	"disabled",
	"formnovalidate",
	"novalidate",
	"noValidate",
	"hidden",
	"ismap",
	"itemscope",
	"loop",
	"multiple",
	"muted",
	"nomodule",
	"open",
	"playsinline",
	"readOnly",
	"required",
	"reversed",
	"selected",
	"truespeed",
];

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