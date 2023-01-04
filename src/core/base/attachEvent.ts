import { deleteEventListener } from '../fn/deleteEventListener.js';
import { setupEventListenerRemover } from '../fn/setupEventListenerRemover.js';
import { attachFn} from './base.interface.js';

export const attachEvent: attachFn = (key, elem, opt) => {
	if (typeof opt[key] === "function") {
		elem.addEventListener(key, opt[key], false);

		setupEventListenerRemover(key, elem, () => {
			deleteEventListener(key, elem, () => {
				elem.removeEventListener(key, opt[key], false);
			});
		});

		delete opt[key];
	}

	return { opt, elem };
}