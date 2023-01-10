import { deleteEventListener } from "./deleteEventListener.js";
import { HTMLElementWithDetachEventListener, setupEventListenerRemover } from "./setupEventListenerRemover.js";

export const elemReady = (doc: Document, callback: Function) => {
	if (doc.readyState != "loading") {
		callback();
	} else {
		console.error("Cannot detect readyState");
		callback();
	}
};

export const documentReady = (callback: Function) => {
	elemReady(document, () => {
		console.log("Welcome");
		callback();
	});
};
