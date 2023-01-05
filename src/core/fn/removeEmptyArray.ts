export const removeEmptyArray = <T>(arr: T[]): T[] => {
	return arr.filter(Boolean);
};
