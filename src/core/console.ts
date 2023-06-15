const DEBUG = false;

export const bstsConsole = {
	log: (...data: any[]) => {
		if (DEBUG) console.log(...data);
	},
	warn: (...data: any[]) => {
		console.warn(...data);
	},
	error: (...data: any[]) => {
		console.error(...data);
	},
};
