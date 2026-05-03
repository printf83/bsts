import { getAttrValue } from "./attachHelpers.js";

import { IAttachFn } from "./_index.js";

const formatDB = [
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

/**
 * Attaches boolean attributes to the element if the key exists in the
 * formatDB array. Checks if the attribute is truthy and sets the attribute
 * to the key name if so. Handles special case for 'indeterminate' on checkbox.
 */
export const attach: IAttachFn = (key, elem, attr) => {
	let changed = false;

	if (typeof key === "string" && formatDB.includes(key) && attr) {
		const value = getAttrValue(attr, key);
		if (typeof value !== "undefined") {
			if (value === true) {
				if (key === "indeterminate") {
					(<HTMLInputElement>elem).indeterminate = true;
				} else {
					elem.setAttribute(key, key);
				}
			}

			changed = true;
		}
	}

	return { attr, elem, changed };
};
