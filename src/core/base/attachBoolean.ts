import { setting } from "../fn/setting.js";
import { attachFn } from "./index.js";

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

export const attachBoolean: attachFn = (key, elem, attr) => {
	if (db.indexOf(key) > -1) {
		if (attr && typeof attr[key] !== "undefined") {
			if (attr[key] === true) {
				elem.setAttribute(key, key);
			} else {
				if (setting.DEBUG) console.log(`Attribute ${key}:${attr[key]} is FALSE`);
			}

			delete attr[key];
		}
	}

	return { attr, elem };
};
