import { addIntoClassList } from '../fn/addIntoClassList.js';
import { attachFn } from './base.interface.js';
export const attachDisabled: attachFn = (key, elem, opt) => {
	if (key === "disabled" && opt[key] === true) {
		elem = addIntoClassList(elem, key);
		elem.setAttribute(`aria-${key}`, opt[key]);
		elem.setAttribute(key, key);
		elem.setAttribute("tabindex", "-1");
		
		delete opt[key];
	}

	return { opt, elem };
}