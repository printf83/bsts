let DATAMANAGERDB: { [key: string]: any } = {};

export const exists = (id: string) => {
	return id in DATAMANAGERDB;
};

export const set = <T>(id: string, data: T) => {
	DATAMANAGERDB[id] = data;
};

export const get = <T>(id: string) => {
	return DATAMANAGERDB[id] as T;
};

export const remove = (id: string) => {
	delete DATAMANAGERDB[id];
};

export const clear = () => {
	DATAMANAGERDB = {};
};
