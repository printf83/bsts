import { addIntoClassList } from '../fn/addIntoClassList.js';
import { attachFn } from './base.interface.js';
export const attachDisabled: attachFn = (key, elem, attr) => {
	if (key === "disabled" && attr[key] === true) {
		elem = addIntoClassList(elem, key);
		elem.setAttribute(`aria-${key}`, attr[key].toString());
		elem.setAttribute(key, key);
		elem.setAttribute("tabindex", "-1");
		
		delete attr[key];
	}

	return { attr, elem };
}