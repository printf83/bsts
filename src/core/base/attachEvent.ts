import { deleteEventListener } from '../fn/deleteEventListener.js';
import { setupEventListenerRemover } from '../fn/setupEventListenerRemover.js';
import { attachFn} from './index.js';

export const attachEvent: attachFn = (key, elem, attr) => {
	if (typeof attr[key] === "function") {
		elem.addEventListener(key, (attr[key] as EventListener), false);

		setupEventListenerRemover(key, elem, () => {
			deleteEventListener(key, elem, () => {
				elem.removeEventListener(key, (attr[key] as EventListener), false);
			});
		});

		delete attr[key];
	}

	return { attr, elem };
}