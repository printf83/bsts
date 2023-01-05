import { elemInfo } from "./elemInfo.js";
import { setting } from "./setting.js";

export const deleteEventListener = (name: string, elem: HTMLElement, callback: Function) => {
	if (typeof elem["detachEventListener"] === "object") {
		if (setting.DEBUG) console.log(`Remove ${name} event from ${elemInfo(elem)}`);

		elem["detachEventListener"][name] = null;
		delete elem["detachEventListener"][name];
	}

	callback();
};
