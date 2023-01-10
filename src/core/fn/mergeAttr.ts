import { baseStyle } from "./../base/index";

export const mergeAttr = <T>(target: T | undefined, source: T | undefined): T => {
	return Object.assign({}, target, source);
};
