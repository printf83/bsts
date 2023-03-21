import { elemInfo } from "./elemInfo.js";
import { setting } from "./setting.js";
export class HTMLElementWithEventDB extends HTMLElement {
    constructor(eventDB) {
        super();
        this.eventDB = eventDB;
    }
}
const removeEvent = (elem) => {
    Object.keys(elem.eventDB).forEach((k) => {
        elem.removeEventListener(k, elem.eventDB[k], false);
        if (setting.DEBUG)
            console.log(`Remove ${k} event from ${elemInfo(elem)}`);
        delete elem.eventDB[k];
    });
};
export const addEvent = (name, elem, fn) => {
    //create detachEventListener db
    if (typeof elem.eventDB === "undefined") {
        elem.eventDB = {};
    }
    //keep fn in detectEventLIstener db
    elem.eventDB[name] = fn;
    //add event to element
    elem.addEventListener(name, fn, true);
    //log
    if (setting.DEBUG)
        console.log(`Attach ${name} event to ${elemInfo(elem)}`);
};
export const deleteEvent = (elem) => {
    if (elem) {
        let c = elem === null || elem === void 0 ? void 0 : elem.childNodes;
        //remove event from child
        if ((c === null || c === void 0 ? void 0 : c.length) > 0) {
            let d = Array.from(c).map((i) => i);
            d.forEach((e) => {
                deleteEvent(e);
                if ("eventDB" in e) {
                    removeEvent(e);
                }
            });
        }
        //detach event from elem
        if ("eventDB" in elem) {
            removeEvent(elem);
        }
    }
};
// export const setupEventListenerRemover = (name: string, elem: HTMLElement, fn: Function): void => {
// 	let e = elem as HTMLElementWithDetachEventListener;
// 	if (typeof e.detachEventListener === "undefined") {
// 		e.detachEventListener = {};
// 	}
// 	e.detachEventListener[name] = fn;
// 	if (setting.DEBUG) console.log(`Attach ${name} event to ${elemInfo(elem)}`);
// };
// export const deleteEventListener = (name: string, elem: HTMLElement, callback: Function) => {
// 	let e = elem as HTMLElementWithDetachEventListener;
// 	if (typeof e.detachEventListener === "object") {
// 		if (setting.DEBUG) console.log(`Remove ${name} event from ${elemInfo(elem)}`);
// 		e.detachEventListener[name] = null;
// 		delete e.detachEventListener[name];
// 	}
// 	callback();
// };
// export const detachEventListener = (elem: HTMLElement): void => {
// 	if (elem) {
// 		let c = elem?.childNodes;
// 		//detach event from child
// 		if (c?.length > 0) {
// 			let d = Array.from(c).map((i) => i as HTMLElement);
// 			d.forEach((i) => {
// 				detachEventListener(i);
// 				if ("detachEventListener" in i) {
// 					let j = i as HTMLElementWithDetachEventListener;
// 					Object.keys(j.detachEventListener).forEach((k) => {
// 						j.detachEventListener[k]!();
// 					});
// 				}
// 			});
// 		}
// 		//detach event from elem
// 		if ("detachEventListener" in elem) {
// 			let j = elem as HTMLElementWithDetachEventListener;
// 			Object.keys(j.detachEventListener).forEach((i) => {
// 				j.detachEventListener[i]!();
// 			});
// 		}
// 	}
// };
