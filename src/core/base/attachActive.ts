import { addIntoClassList } from '../fn/addIntoClassList.js';
import { attachFn } from './base.interface.js';
export const attachActive: attachFn = (key, elem, attr) => {
	if (attr[key] === true && key === "active") {
		elem = addIntoClassList(elem, "active");
		delete attr[key];
	}

	return { attr, elem };
}




