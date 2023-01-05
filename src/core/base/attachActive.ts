import { addIntoClassList } from '../fn/addIntoClassList.js';
import { attachFn } from './index.js';

export const attachActive: attachFn = (key, elem, attr) => {
	if (key === "active" && attr[key] === true) {
		elem = addIntoClassList(elem, "active");
		delete attr[key];
	}

	return { attr, elem };
}




