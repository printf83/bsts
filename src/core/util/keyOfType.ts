/**
 * Gets the key of the given type from an object.
 *
 * This allows getting the key of a specific type from an object
 * where the key is a string or undefined. It casts the key to the
 * desired key type to ensure type safety.
 *
 * Useful for getting typed keys from objects like React props.
 */
export const keyOfType = <T>(key: string | undefined, obj: T) => {
	type result = keyof typeof obj;
	return key as result;
};
