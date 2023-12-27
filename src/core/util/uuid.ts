/**
 * Generates a UUID (Universally Unique IDentifier) string using the provided
 * format.
 *
 * The format string can contain 'x' and 'y' characters that will be replaced
 * with random hex digits.
 *
 * @param format - The format string to use. Default is 'el-xxxxxxxxxxxx'.
 * @returns The generated UUID string.
 */
export const UUID = (format: string = "el-xxxxxxxxxxxx"): string => {
	return format.replace(/[xy]/g, (c) => {
		let r = (Math.random() * 16) | 0,
			v = c === "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
};
