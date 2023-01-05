import { elemInfo } from "./elemInfo.js";
import { setting } from "./setting.js";

export const setupEventListenerRemover = (name: string, elem: HTMLElement, fn: Function): void => {
	if (typeof elem["detachEventListener"] === "undefined") {
		elem["detachEventListener"] = {};
	}
	elem["detachEventListener"][name] = fn;

	if (setting.DEBUG) console.log(`Attach ${name} event to ${elemInfo(elem)}`);
};
