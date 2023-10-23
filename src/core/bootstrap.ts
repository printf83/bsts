import { mergeObject } from "./util/mergeObject.js";
import { isAttr } from "./tag.js";
import { attr } from "../interface/core/attr.js";

export const bsConstructorNoElement = <T extends attr>(fn: <T extends attr>(attr: T) => attr, arg?: any[]) => {
	if (arg) {
		if (arg.length === 1) {
			return fn(arg[0] as T);
		} else {
			return fn({});
		}
	} else {
		return fn({});
	}
};

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
