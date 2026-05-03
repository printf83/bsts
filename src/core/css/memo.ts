const cssMemo = new Map<string, string>();

export const memoizeCss = (key: string, generator: () => string): string => {
	if (cssMemo.has(key)) {
		return cssMemo.get(key)!;
	}

	const css = generator();
	cssMemo.set(key, css);

	return css;
};
