import { keyOfType } from "./../keyOfType.js";
import { IAttachFn } from "./_index.js";

const dbBoolean = [
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
	let changed = false;

	if (key) {
		if (dbBoolean.indexOf(key) > -1) {
			let k = keyOfType(key, attr);

			if (attr && typeof attr[k] !== "undefined") {
				if (attr[k] === true) {
					if (key === "indeterminate") {
						(<HTMLInputElement>elem).indeterminate = true;
					} else {
						elem.setAttribute(key, key);
					}
				}

				changed = true;
			}
		}
	}

	return { attr, elem, changed };
};
