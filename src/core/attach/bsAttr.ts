import { getAttrValues, getAllowedKey, setAttributeValue, setStyleValue } from "./attachHelpers.js";
import { keyOfType } from "../util/keyOfType.js";
import { IAttachFn } from "./_index.js";

export type IFormat = (elem: Element, data: string | number | boolean) => Element;

const formatDB: {
	[key: string]: IFormat;
} = {
	theme: (elem, data) => {
		setAttributeValue(elem, "data-bs-theme", data);
		return elem;
	},
	pointer: (elem, data) => {
		if (data) {
			elem.setAttribute("role", "button");
		}

		return elem;
	},
	label: (elem, data) => {
		setAttributeValue(elem, "aria-label", data);
		return elem;
	},
	labelledby: (elem, data) => {
		setAttributeValue(elem, "aria-labelledby", data);
		return elem;
	},
	ownby: (elem, data) => {
		setAttributeValue(elem, "aria-owns", data);
		return elem;
	},
	describedby: (elem, data) => {
		setAttributeValue(elem, "aria-describedby", data);
		return elem;
	},
	controlfor: (elem, data) => {
		setAttributeValue(elem, "aria-controls", data);
		return elem;
	},
	gridTemplateColumns: (elem, data) => {
		setStyleValue(elem as HTMLElement, "gridTemplateColumns", data);
		return elem;
	},
	gridTemplateAreas: (elem, data) => {
		setStyleValue(elem as HTMLElement, "gridTemplateAreas", data);
		return elem;
	},
	gridTemplateRows: (elem, data) => {
		setStyleValue(elem as HTMLElement, "gridTemplateRows", data);
		return elem;
	},
	gridArea: (elem, data) => {
		setStyleValue(elem as HTMLElement, "gridArea", data);
		return elem;
	},
};

/**
 * Applies a formatting rule to an element.
 *
 * @param rule - The formatting rule to apply.
 * @param data - The data to pass to the formatting rule.
 * @param elem - The element to apply the rule to.
 * @returns The updated element.
 */
function addAttr(rule: IFormat | undefined, data: string | number | boolean, elem: Element) {
	if (rule) {
		elem = rule(elem, data);
	}

	return elem;
}

/**
 * Applies formatting rules from the formatDB object to the given element,
 * based on the provided attribute key-value pairs.
 *
 * Checks if the key is allowed, gets the corresponding format rule,
 * extracts the data from the attributes, and applies the rule to the element.
 *
 * Removes handled attributes from the attribute object after applying the rule.
 *
 * Returns an object indicating the updated attribute object, element,
 * and whether any changes were made.
 */
export const attach: IAttachFn = (key, elem, attr) => {
	let changed = false;
	const allowKey = getAllowedKey(key, formatDB);
	if (allowKey) {
		const a = keyOfType(key, attr);
		const data = getAttrValues(attr, key);

		data.forEach((i) => {
			elem = addAttr(formatDB[allowKey], i, elem);
		});

		delete attr[a];
		changed = true;
	}

	return { attr, elem, changed };
};
