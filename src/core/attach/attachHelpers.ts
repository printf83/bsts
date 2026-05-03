import { keyOfType } from "../util/keyOfType.js";
import { addClassIntoElement } from "../util/addClassIntoElement.js";
import { bsClassFormatter } from "../../interface/core/bsClassFormatter.js";

export class Formatter implements bsClassFormatter {
	shared?: boolean;
	value?: (string | number | boolean)[];
	format?: string;
	formatValue?: string;
	formatTrue?: string;
	formatFalse?: string;

	constructor(d: bsClassFormatter) {
		this.shared = d.shared;
		this.value = d.value;
		this.format = d.format;
		this.formatValue = d.formatValue;
		this.formatTrue = d.formatTrue;
		this.formatFalse = d.formatFalse;
	}
}

export const getAttrValue = <T extends object>(attr: T, key: string | undefined): unknown => {
	if (!key) {
		return undefined;
	}

	return attr[keyOfType(key, attr)];
};

export const getAttrValues = <T extends object>(attr: T, key: string | undefined): (string | number | boolean)[] => {
	const value = getAttrValue(attr, key);
	if (value === undefined || value === null) {
		return [];
	}

	return Array.isArray(value) ? (value as (string | number | boolean)[]) : [value as string | number | boolean];
};

export const getAllowedKey = <T extends object>(key: unknown, map: T): keyof T | null => {
	if (typeof key === "string" && key in map) {
		return key as keyof T;
	}

	return null;
};

export const applyClassFormatter = (
	rule: bsClassFormatter | undefined,
	data: string | number | boolean,
	elem: Element
): Element => {
	if (!rule || !rule.value || !allowValue(data, rule.value)) {
		return elem;
	}

	if (rule.formatValue) {
		elem = addClassIntoElement(elem, rule.formatValue);
	}

	if (data === true && rule.formatTrue) {
		elem = addClassIntoElement(elem, rule.formatTrue);
	} else if (data === false && rule.formatFalse) {
		elem = addClassIntoElement(elem, rule.formatFalse);
	} else if (rule.format) {
		elem = addClassIntoElement(elem, rule.format.replace(/\$1/g, data.toString()));
	}

	return elem;
};

const allowValue = <T extends string | number | boolean>(
	valueToCheck: string | number | boolean,
	listOfPossible: (string | number | boolean)[]
): valueToCheck is T => {
	return Array.isArray(listOfPossible) && listOfPossible.includes(valueToCheck);
};
