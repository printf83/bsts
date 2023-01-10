import { baseAttr } from "../base/index.js";
import { mergeAttr } from "./mergeAttr.js";
import { mergeClass } from "./mergeClass.js";

// export const mergeObject = (target: baseAttr, source: baseAttr): baseAttr | null => {
// 	if (target) {
// 		if (source) {
// 			let result: baseAttr = {};

// 			Object.keys(target).forEach((i) => {
// 				let k = keyOfType(i, result);

// 				if (source.hasOwnProperty(i)) {
// 					if (i === "class") {
// 						result.class = mergeClass(target.class, source.class);
// 					} else if (i === "style") {
// 						result.style = mergeStyle(target.style, source.style);
// 					} else {
// 						result[k] = source[k]; //used newObject insted
// 					}
// 				} else {
// 					result[k] = target[k];
// 				}
// 			});

// 			Object.keys(source).forEach((i) => {
// 				if (!target.hasOwnProperty(i)) {
// 					let k = keyOfType(i, source);

// 					if (source[k] !== null && source[k] !== undefined) {
// 						result[k] = source[k];
// 					}
// 				}
// 			});

// 			return result;
// 		} else {
// 			return target;
// 		}
// 	} else {
// 		if (source) {
// 			return source;
// 		} else {
// 			return null;
// 		}
// 	}
// };

export const mergeObject = (target: baseAttr, source: baseAttr): baseAttr | null => {
	if (target) {
		if (source) {
			let target_class = target.class;
			let source_class = source.class;
			let target_style = target.style;
			let source_style = source.style;
			let target_aria = target.aria;
			let source_aria = source.aria;
			let target_data = target.data;
			let source_data = source.data;
			let target_on = target.on;
			let source_on = source.on;

			let result = mergeAttr(target, source);

			result.class = mergeClass(target_class, source_class);
			result.style = mergeAttr(target_style, source_style);
			result.aria = mergeAttr(target_aria, source_aria);
			result.data = mergeAttr(target_data, source_data);
			result.on = mergeAttr(target_on, source_on);

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
