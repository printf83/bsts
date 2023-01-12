import { IAttr } from "../base/tag.js";
import { mergeAttr } from "./mergeAttr.js";
import { mergeClass } from "./mergeClass.js";

export const mergeObject = <T extends IAttr>(target: T, source: T): T | never => {
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
			throw new Error("Please provide target or source");
		}
	}
};
