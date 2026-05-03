/**
 * Converts a camelCase string to dash-separated format.
 *
 * @param value - The input string in camelCase format.
 * @returns The input string converted to dash-separated format.
 */
export const camel2Dash = (value?: string): string =>
	(value ?? "").replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
