import { deleteEventListener } from '../fn/deleteEventListener.js';
import { setupEventListenerRemover } from '../fn/setupEventListenerRemover.js';
import { attachFn} from './base.interface.js';

export const attachEvent: attachFn = (key, elem, attr) => {
	if (typeof attr[key] === "function") {
		elem.addEventListener(key, attr[key], false);

		setupEventListenerRemover(key, elem, () => {
			deleteEventListener(key, elem, () => {
				elem.removeEventListener(key, attr[key], false);
			});
		});

		delete attr[key];
	}

	return { attr, elem };
}