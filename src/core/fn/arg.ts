import { IAttrBSBtnclose } from "../../bs/btnclose.js";
import { IAttr, isAttr } from "../base/tag.js";
import { mergeObject } from "./mergeObject.js";

export const conBtnclose = <T extends IAttrBSBtnclose>(
	fn: <T extends IAttrBSBtnclose>(attr: T) => IAttrBSBtnclose,
	arg?: any[]
) => {
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

// export type IConvertFn = <T extends IAttr>(attr: T) => IAttr;

export const conElem = <T extends IAttr>(fn: <T extends IAttr>(attr: T) => IAttr, arg?: any[]) => {
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

export const conElemT = <T extends IAttr>(t1: string, t2: string, fn: (i: T) => boolean, arg?: any[]) => {
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
