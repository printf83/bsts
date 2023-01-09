import { baseAttr } from "./../base/index";
import { mergeClass } from "./mergeClass.js";
import { mergeStyle } from "./mergeStyle.js";

// export const mergeObject = (
// 	existingObject: baseAttr | null | undefined,
// 	newObject: baseAttr | null | undefined
// ): baseAttr | null => {
// 	if (existingObject) {
// 		if (newObject) {
// 			let res = {};
// 			Object.keys(existingObject).forEach((i) => {
// 				if (newObject.hasOwnProperty(i)) {
// 					if (i === "class") {
// 						res[i] = mergeClass(existingObject[i], newObject[i]);
// 					} else if (i === "style") {
// 						res[i] = mergeStyle(existingObject[i], newObject[i]);
// 					} else {
// 						res[i] = newObject[i]; //used newObject insted
// 					}
// 				} else {
// 					res[i] = existingObject[i];
// 				}
// 			});

// 			Object.keys(newObject).forEach((i) => {
// 				if (!existingObject.hasOwnProperty(i)) {
// 					if (newObject[i] !== null && newObject[i] !== undefined) {
// 						res[i] = newObject[i];
// 					}
// 				}
// 			});

// 			return res;
// 		} else {
// 			return existingObject;
// 		}
// 	} else {
// 		if (newObject) {
// 			return newObject;
// 		} else {
// 			return null;
// 		}
// 	}
// };

export const mergeObject = (target: object, source: object): object => {
	if (target) {
		if (source) {
			let result = {};

			Object.keys(target).forEach((i) => {
				if (source.hasOwnProperty(i)) {
					if (i === "class") {
						result[i] = mergeClass(target[i], source[i]);
					} else if (i === "style") {
						result[i] = mergeStyle(target[i], source[i]);
					} else {
						result[i] = source[i]; //used newObject insted
					}
				} else {
					result[i] = target[i];
				}
			});

			Object.keys(source).forEach((i) => {
				if (!target.hasOwnProperty(i)) {
					if (source[i] !== null && source[i] !== undefined) {
						result[i] = source[i];
					}
				}
			});

			return result;
		} else {
			return target;
		}
	} else {
		if (source) {
			return source;
		} else {
			return null;
		}
	}
};
