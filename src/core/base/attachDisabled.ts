import { addIntoClassList } from '../fn/addIntoClassList.js';
import { attachFn } from './index.js';

export const attachDisabled: attachFn = (key, elem, attr) => {
	if (key === "disabled" && attr[key] === true) {
		elem = addIntoClassList(elem, "disabled");
		elem.setAttribute("aria-disabled", "true");
		elem.setAttribute("disabled", "disabled");
		elem.setAttribute("tabindex", "-1");
		
		delete attr[key];
	}

	return { attr, elem };
}