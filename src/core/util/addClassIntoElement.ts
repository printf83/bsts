import { removeEmptyArray } from "./removeEmptyArray.js";
import { bstsConsole as console } from "./console.js";

/**
 * Normalizes class input into an array of class names.
 *
 * Supports string, undefined, and array values.
 * Splits space-separated class strings and removes empty values.
 */
export const manageClass = (value: string | undefined | (string | undefined)[]): string[] => {
	const values = Array.isArray(value) ? value : [value];

	return removeEmptyArray(values).flatMap((item) =>
		item.includes(" ") ? removeEmptyArray(item.split(" ")) : [item]
	);
};

/**
 * Adds the provided class(es) to the given element.
 * Handles input as string or array, removes empty values,
 * and splits space-separated class strings into array.
 */
export const addClassIntoElement = (elem: Element, value: string | undefined | (string | undefined)[]): Element => {
	try {
		const classes = manageClass(value);
		if (classes.length > 0) {
			elem.classList.add(...classes);
		}
	} catch (error) {
		console.error(`Fail to add class ${value}`, error);
	}

	return elem;
};
