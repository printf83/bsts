import { attr } from "../../interface/core/attr.js";
import { mergeAttr } from "./mergeAttr.js";
import { mergeClass } from "./mergeClass.js";

/**
 * Merges two attr objects together deeply, giving priority to properties in
 * source. Handles merging class, style, aria, data, and on specially.
 *
 * @param target - The target attr object to merge into
 * @param source - The source attr object to merge from
 * @returns The merged attr object
 */
export const mergeObject = <T extends attr>(target?: T, source?: T): T => {
	if (!target && !source) {
		throw new Error("Please provide target or source");
	}

	const result = mergeAttr(target ?? ({} as T), source ?? ({} as T));
	result.class = mergeClass(target?.class, source?.class);
	result.style = mergeAttr(target?.style, source?.style);
	result.aria = mergeAttr(target?.aria, source?.aria);
	result.data = mergeAttr(target?.data, source?.data);
	result.on = mergeAttr(target?.on, source?.on);

	return result as T;
};
