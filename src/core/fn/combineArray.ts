import { removeEmptyArray } from "./removeEmptyArray.js";

export const combineArray = <T>(arr: T[], delimeter: string): string => {
	return removeEmptyArray<T>(arr)?.join(delimeter);
}