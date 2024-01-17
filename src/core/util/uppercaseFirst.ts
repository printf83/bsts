/**
 * Capitalizes the first letter of a string.
 *
 * @param str - The string to capitalize.
 * @returns The capitalized string, or the original string if falsy.
 */
export const uppercaseFirst = (str: string) => {
	if (str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	} else {
		return str;
	}
};
