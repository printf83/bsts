import { removeEmptyArray } from "./removeEmptyArray";

export const combineArray = <T>(arr: T[], delimeter: string): string => {
	return removeEmptyArray<T>(arr)?.join(delimeter);
}