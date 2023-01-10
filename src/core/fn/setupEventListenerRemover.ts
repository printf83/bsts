import { elemInfo } from "./elemInfo.js";
import { setting } from "./setting.js";

export interface IDetachEventListener {
	[key: string]: Function | null;
}

export class HTMLElementWithDetachEventListener extends HTMLElement {
	constructor(public detachEventListener: IDetachEventListener) {
		super();
	}
}

export const setupEventListenerRemover = (name: string, elem: HTMLElement, fn: Function): void => {
	let e = elem as HTMLElementWithDetachEventListener;
	if (typeof e.detachEventListener === "undefined") {
		e.detachEventListener = {};
	}

	e.detachEventListener[name] = fn;

	if (setting.DEBUG) console.log(`Attach ${name} event to ${elemInfo(elem)}`);
};
