import { keyOfType } from "../util/keyOfType.js";
import { addClassIntoElement } from "../util/addClassIntoElement.js";
import { camel2Dash } from "../util/camel2Dash.js";
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

export const normalizeAttributeValue = (value: unknown): string | undefined => {
	if (value === undefined || value === null) {
		return undefined;
	}

	if (Array.isArray(value)) {
		return value
			.map((item) => {
				if (item === undefined || item === null) {
					return "";
				}

				if (typeof item === "object") {
					try {
						return JSON.stringify(item);
					} catch {
						return String(item);
					}
				}

				return String(item);
			})
			.join(" ");
	}

	if (typeof value === "object") {
		try {
			return JSON.stringify(value);
		} catch {
			return String(value);
		}
	}

	return String(value);
};

export const setAttributeValue = (elem: Element, key: string, value: unknown): boolean => {
	const normalizedValue = normalizeAttributeValue(value);
	if (normalizedValue !== undefined) {
		elem.setAttribute(key, normalizedValue);
		return true;
	}
	return false;
};

export const setStyleValue = (elem: HTMLElement, key: keyof CSSStyleDeclaration, value: unknown): boolean => {
	const normalizedValue = normalizeAttributeValue(value);
	if (normalizedValue !== undefined) {
		elem.style.setProperty(camel2Dash(String(key)), normalizedValue);
		return true;
	}
	return false;
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
