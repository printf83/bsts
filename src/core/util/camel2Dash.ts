/**
 * Converts a camelCase string to a dash-separated string.
 *
 * @param value - The input string in camelCase format.
 * @returns The input string converted to dash-separated format.
 */
export const camel2Dash = (value?: string): string => {
	if (value) {
		return value.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
	} else {
		return "";
	}
};
