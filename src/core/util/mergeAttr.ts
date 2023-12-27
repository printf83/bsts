/**
 * Merges the properties of two objects into the target object.
 * Copies all enumerable properties from the source object into the target object.
 * Returns the target object.
 */
export const mergeAttr = <T>(target: T | undefined, source: T | undefined): T => {
	return Object.assign({}, target, source);
};
