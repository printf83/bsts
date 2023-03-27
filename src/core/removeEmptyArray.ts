export const removeEmptyArray = <T>(arr: T[]): Exclude<T, undefined>[] => {
	return arr.filter(Boolean) as Exclude<T, undefined>[];
};
