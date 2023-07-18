export const keyOfType = <T>(key: string | undefined, obj: T) => {
	type result = keyof typeof obj;
	return key as result;
};
