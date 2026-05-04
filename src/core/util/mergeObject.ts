import { attr } from "../../interface/core/attr.js";
import { mergeAttr } from "./mergeAttr.js";
import { mergeClass } from "./mergeClass.js";

const mergeNested = <T extends object>(target?: T, source?: T): T | undefined => {
	if (!target && !source) {
		return undefined;
	}

	const merged = mergeAttr(target ?? ({} as T), source ?? ({} as T)) as Record<string, unknown>;
	const cleaned = Object.entries(merged).reduce<Record<string, unknown>>((acc, [key, value]) => {
		if (value != null) {
			acc[key] = value;
		}
		return acc;
	}, {});

	return Object.keys(cleaned).length > 0 ? (cleaned as T) : undefined;
};

export const mergeObject = <T extends attr>(target?: T, source?: T): T => {
	if (!target && !source) {
		throw new Error("Please provide target or source");
	}

	return {
		...mergeAttr(target ?? ({} as T), source ?? ({} as T)),
		class: mergeClass(target?.class, source?.class),
		style: mergeNested(target?.style, source?.style),
		aria: mergeNested(target?.aria, source?.aria),
		data: mergeNested(target?.data, source?.data),
		on: mergeNested(target?.on, source?.on),
	} as T;
};
