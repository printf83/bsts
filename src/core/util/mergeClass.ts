import { removeEmptyArray } from "./removeEmptyArray.js";

/**
 * Splits a string, array or undefined into an array, removing any undefined values.
 */
function string2Array(d: string | undefined | (string | undefined)[]) {
	let result: undefined | (string | undefined)[];
	if (typeof d === "string") {
		result = d.split(" ");
	} else {
		result = d;
	}

	return result;
}

/**
 * Merges two string arrays, removing duplicates and empty values.
 *
 * Takes a target and source array, converts them to string arrays using
 * string2Array(), removes empty values using removeEmptyArray(),
 * concatenates them, and removes duplicates.
 *
 * Returns a new array containing the merged and deduplicated values.
 */
export const mergeClass = (
	target: string | undefined | (string | undefined)[],
	source: string | undefined | (string | undefined)[]
): string[] => {
	target = string2Array(target);
	source = string2Array(source);

	let result: string[] = [];

	if (target) {
		if (source) {
			result = removeEmptyArray([...target, ...source]);
		} else {
			result = removeEmptyArray(target);
		}
	} else {
		if (source) {
			result = removeEmptyArray(source);
		}
	}

	return result.filter((value, index) => result.indexOf(value) === index);
};
