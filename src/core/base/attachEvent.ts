import { deleteEventListener } from '../fn/deleteEventListener.js';
import { setupEventListenerRemover } from '../fn/setupEventListenerRemover.js';
import { IBase, IAttachResult} from './base.interface';

export const attachEvent = (key:string, elem:HTMLElement, opt:IBase):IAttachResult => {
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