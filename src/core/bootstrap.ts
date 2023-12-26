import { mergeObject } from "./util/mergeObject.js";
import { isAttr } from "./tag.js";
import { attr } from "../interface/core/attr.js";

/**
 * Constructs a Bootstrap component without returning an element,
 * only the component properties.
 *
 * @param arg - Optional constructor arguments, will return arg[0] if only one arg.
 * @returns The constructed component properties object.
 */
export const bsConstructorNoElement = <T extends attr>(arg?: any[]) => {
	if (arg) {
		if (arg.length === 1) {
			return arg[0] as T;
		} else {
			return {};
		}
	} else {
		return {};
	}
};

/**
 * Constructs a Bootstrap component by conditionally merging properties.
 *
 * @param prop - The property to attach the second argument to, when merging into the first argument
 * @param arg - Optional constructor arguments, where arg[0] is merged with {[prop]: arg[1]}
 * @returns The constructed component properties object
 */
export const bsConstructor = <T extends attr>(prop: string, arg?: any[]) => {
	if (arg) {
		if (arg.length === 1) {
			if (isAttr<T>(arg[0])) {
				return arg[0] as T;
			} else {
				return { [prop]: arg[0] } as T;
			}
		} else if (arg.length === 2) {
			return mergeObject<T>({ [prop]: arg[1] } as T, arg[0] as T);
		} else {
			return {} as T;
		}
	} else {
		return {} as T;
	}
};

/**
 * Constructs a Bootstrap component, conditionally returning one tag or another based on a predicate function.
 *
 * @param prop - The property to attach the second argument to, when merging into the first argument
 * @param t1 - The tag to return if the predicate returns false
 * @param t2 - The tag to return if the predicate returns true
 * @param fn - The predicate function that determines which tag to return
 * @param arg - Optional constructor arguments, where arg[0] is merged with {[prop]: arg[1]}
 * @returns The t1 or t2 tag, conditionally based on the predicate function evaluation
 */
export const bsConstructorMultiTag = <T extends attr>(
	prop: string,
	t1: string,
	t2: string,
	fn: (i: T) => boolean,
	arg?: any[]
) => {
	if (arg) {
		if (arg.length === 1) {
			if (isAttr<T>(arg[0])) {
				return fn(arg[0]) ? t2 : t1;
			} else {
				return t1;
			}
		} else if (arg.length === 2) {
			return fn(mergeObject<T>({ [prop]: arg[1] } as T, arg[0] as T)) ? t2 : t1;
		} else {
			return t1;
		}
	} else {
		return t1;
	}
};
