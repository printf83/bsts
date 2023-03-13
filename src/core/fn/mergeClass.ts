import { removeEmptyArray } from "./removeEmptyArray.js";

const string2Array = (d: string | undefined | (string | undefined)[]) => {
	let result: undefined | (string | undefined)[];
	if (typeof d === "string") {
		result = d.split(" ");
	} else {
		result = d;
	}

	return result;
};

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
