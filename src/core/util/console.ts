import { elemInfo } from "./elemInfo.js";

const DEBUG = false;

/**
 * Console logging API with debug mode support. Provides log, warn, error and info methods.
 * The log, warn, and error methods conditionally log to the console based on a DEBUG constant.
 * The info method logs contextual messages by replacing placeholders in the message template.
 */
export const bstsConsole = {
	log: (...data: unknown[]) => {
		if (DEBUG) console.log(...data);
	},
	warn: (...data: unknown[]) => {
		console.warn(...data);
	},
	error: (...data: unknown[]) => {
		console.error(...data);
	},
	info: (action: string, elem?: Element | string) => {
		if (!DEBUG) return;
		const target = elem ? (typeof elem === "string" ? elem : elemInfo(elem)) : "";

		console.log(action.replace("$1", target));
	},
};
