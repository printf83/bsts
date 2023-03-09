import { IAttr, isAttr } from "../base/tag.js";
import { mergeObject } from "./mergeObject.js";

export type IConvertFn = <T extends IAttr>(attr: T) => IAttr;

export const con4 = <T extends IAttr>(fn: IConvertFn, arg?: any[]) => {
	if (arg) {
		if (arg.length === 1) {
			if (isAttr<T>(arg[0])) {
				return fn(arg[0]);
			} else {
				return fn({ elem: arg[0] });
			}
		} else if (arg.length === 2) {
			return fn(mergeObject({ elem: arg[1] }, arg[0]));
		} else {
			return fn({});
		}
	} else {
		return fn({});
	}
};
export const con4T = <T extends IAttr>(
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
			return fn(arg[0]) ? t2 : t1;
		} else {
			return t1;
		}
	} else {
		return t1;
	}
};
