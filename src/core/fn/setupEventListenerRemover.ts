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

export const deleteEventListener = (name: string, elem: HTMLElement, callback: Function) => {
	let e = elem as HTMLElementWithDetachEventListener;

	if (typeof e.detachEventListener === "object") {
		if (setting.DEBUG) console.log(`Remove ${name} event from ${elemInfo(elem)}`);

		e.detachEventListener[name] = null;
		delete e.detachEventListener[name];
	}

	callback();
};

export const detachEventListener = (elem: HTMLElement): void => {
	if (elem) {
		let c = elem?.childNodes;

		//detach event from child
		if (c?.length > 0) {
			let d = Array.from(c).map((i) => i as HTMLElement);

			d.forEach((i) => {
				detachEventListener(i);
				if ("detachEventListener" in i) {
					let j = i as HTMLElementWithDetachEventListener;
					Object.keys(j.detachEventListener).forEach((k) => {
						j.detachEventListener[k]!();
					});
				}
			});
		}

		//detach event from elem
		if ("detachEventListener" in elem) {
			let j = elem as HTMLElementWithDetachEventListener;
			Object.keys(j.detachEventListener).forEach((i) => {
				j.detachEventListener[i]!();
			});
		}
	}
};
