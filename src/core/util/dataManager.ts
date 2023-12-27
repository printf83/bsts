let DATAMANAGERDB: { [key: string]: any } = {};

/**
 * Checks if a data item with the given ID exists in the data manager store.
 *
 * @param id - The ID of the data item to check for existence.
 * @returns True if the data item exists, false otherwise.
 */
export const exists = (id: string) => {
	return id in DATAMANAGERDB;
};

/**
 * Sets the value for the data item with the given ID in the data manager store.
 *
 * @param id - The ID of the data item to set.
 * @param data - The data value to set.
 */
export const set = <T>(id: string, data: T) => {
	DATAMANAGERDB[id] = data;
};

/**
 * Gets the value of the data item with the given ID from the data manager store.
 *
 * @param id - The ID of the data item to get.
 * @returns The data item value.
 */
export const get = <T>(id: string) => {
	return DATAMANAGERDB[id] as T;
};

/**
 * Removes the data item with the given ID from the data manager store.
 *
 * @param id - The ID of the data item to remove.
 */
export const remove = (id: string) => {
	delete DATAMANAGERDB[id];
};

/**
 * Clears all data from the data manager store.
 */
export const clear = () => {
	DATAMANAGERDB = {};
};
