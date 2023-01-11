import { keyOfType } from "./../fn/keyOfType.js";
import { setting } from "../fn/setting.js";
import { IAttachFn } from "./index.js";

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
	"readonly",
	"required",
	"reversed",
	"sandbox",
	"selected",
	"truespeed",
];

export const attachBoolean: IAttachFn = (key, elem, attr) => {
	if (db.indexOf(key) > -1) {
		let k = keyOfType(key, attr);

		if (attr && typeof attr[k] !== "undefined") {
			if (attr[k] === true) {
				elem.setAttribute(key, key);
			} else {
				if (setting.DEBUG) console.log(`Attribute ${key}:${attr[k]} is FALSE`);
			}

			delete attr[k];
		}
	}

	return { attr, elem };
};
