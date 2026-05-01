/**
 * Gets the key of the given type from an object.
 *
 * This allows getting the key of a specific type from an object
 * where the key is a string or undefined. It casts the key to the
 * desired key type to ensure type safety.
 *
 * Useful for getting typed keys from objects like React props.
 */
export const keyOfType = <T extends object>(key: string | undefined, obj: T) => {
	void obj;
	return key as keyof T;
};
