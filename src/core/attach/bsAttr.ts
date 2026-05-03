import { getAttrValues, getAllowedKey, normalizeAttributeValue } from "./attachHelpers.js";
import { keyOfType } from "../util/keyOfType.js";
import { IAttachFn } from "./_index.js";

export type IFormat = (elem: Element, data: string | number | boolean) => Element;

const formatDB: {
	[key: string]: IFormat;
} = {
	theme: (elem, data) => {
		const normalizedValue = normalizeAttributeValue(data);
		if (normalizedValue !== undefined) {
			elem.setAttribute(`data-bs-theme`, normalizedValue);
		}

		return elem;
	},
	pointer: (elem, data) => {
		if (data) {
			elem.setAttribute("role", "button");
		}

		return elem;
	},
	label: (elem, data) => {
		const normalizedValue = normalizeAttributeValue(data);
		if (normalizedValue !== undefined) {
			elem.setAttribute("aria-label", normalizedValue);
		}

		return elem;
	},
	labelledby: (elem, data) => {
		const normalizedValue = normalizeAttributeValue(data);
		if (normalizedValue !== undefined) {
			elem.setAttribute("aria-labelledby", normalizedValue);
		}

		return elem;
	},
	ownby: (elem, data) => {
		const normalizedValue = normalizeAttributeValue(data);
		if (normalizedValue !== undefined) {
			elem.setAttribute("aria-owns", normalizedValue);
		}

		return elem;
	},
	describedby: (elem, data) => {
		const normalizedValue = normalizeAttributeValue(data);
		if (normalizedValue !== undefined) {
			elem.setAttribute("aria-describedby", normalizedValue);
		}

		return elem;
	},
	controlfor: (elem, data) => {
		const normalizedValue = normalizeAttributeValue(data);
		if (normalizedValue !== undefined) {
			elem.setAttribute("aria-controls", normalizedValue);
		}

		return elem;
	},
	gridTemplateColumns: (elem, data) => {
		const normalizedValue = normalizeAttributeValue(data);
		if (normalizedValue !== undefined) {
			(elem as HTMLElement).style.gridTemplateColumns = normalizedValue;
		}

		return elem;
	},
	gridTemplateAreas: (elem, data) => {
		const normalizedValue = normalizeAttributeValue(data);
		if (normalizedValue !== undefined) {
			(elem as HTMLElement).style.gridTemplateAreas = normalizedValue;
		}

		return elem;
	},
	gridTemplateRows: (elem, data) => {
		const normalizedValue = normalizeAttributeValue(data);
		if (normalizedValue !== undefined) {
			(elem as HTMLElement).style.gridTemplateRows = normalizedValue;
		}

		return elem;
	},
	gridArea: (elem, data) => {
		const normalizedValue = normalizeAttributeValue(data);
		if (normalizedValue !== undefined) {
			(elem as HTMLElement).style.gridArea = normalizedValue;
		}

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
