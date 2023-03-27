import { IAttr } from "./tag.js";
import { mergeAttr } from "./mergeAttr.js";
import { mergeClass } from "./mergeClass.js";

export const mergeObject = <T extends IAttr>(target: T, source: T): T | never => {
	if (target) {
		if (source) {
			let a_class = target.class;
			let b_class = source.class;
			let a_style = target.style;
			let b_style = source.style;
			let a_aria = target.aria;
			let b_aria = source.aria;
			let a_data = target.data;
			let b_data = source.data;
			let a_on = target.on;
			let b_on = source.on;

			let result = mergeAttr(target, source);

			result.class = mergeClass(a_class, b_class);
			result.style = mergeAttr(a_style, b_style);
			result.aria = mergeAttr(a_aria, b_aria);
			result.data = mergeAttr(a_data, b_data);
			result.on = mergeAttr(a_on, b_on);

			return result;
		} else {
			return target;
		}
	} else {
		if (source) {
			return source;
		} else {
			throw new Error("Please provide target or source");
		}
	}
};
