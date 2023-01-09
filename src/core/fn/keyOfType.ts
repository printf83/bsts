export const keyOfType = <T>(key: string, obj: T) => {
	type result = keyof typeof obj;
	return key as result;
};
