/**
 * Removes any undefined elements from the given array.
 *
 * @param arr - The input array that may contain undefined elements.
 * @returns A new array containing only the defined elements from the input.
 */
export const removeEmptyArray = <T>(arr: T[]): Exclude<T, undefined>[] => {
	return arr.filter(Boolean) as Exclude<T, undefined>[];
};
