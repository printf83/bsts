import { elemInfo } from "./elemInfo.js";

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
	info: (action: string, elem?: Element | string) => {
		if (DEBUG) {
			if (elem) {
				if (typeof elem === "string") {
					console.log(action.replace("$1", elem));
				} else {
					console.log(action.replace("$1", elemInfo(elem)));
				}
			} else {
				console.log(action.replace("$1", ""));
			}
		}
	},
};
