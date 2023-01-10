import { elemInfo } from "./elemInfo.js";
import { setting } from "./setting.js";
import { HTMLElementWithDetachEventListener } from "./setupEventListenerRemover.js";

export const deleteEventListener = (name: string, elem: HTMLElement, callback: Function) => {
	let e = elem as HTMLElementWithDetachEventListener;

	if (typeof e.detachEventListener === "object") {
		if (setting.DEBUG) console.log(`Remove ${name} event from ${elemInfo(elem)}`);

		e.detachEventListener[name] = null;
		delete e.detachEventListener[name];
	}

	callback();
};
