import { addIntoClassList } from '../fn/addIntoClassList.js';
import { attachFn } from './base.interface.js';
export const attachActive: attachFn = (key, elem, opt) => {
	if (opt[key] === true && key === "active") {
		elem = addIntoClassList(elem, "active");
		delete opt[key];
	}

	return { opt, elem };
}




