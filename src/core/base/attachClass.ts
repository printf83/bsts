import { addIntoClassList } from '../fn/addIntoClassList.js';
import { attachFn } from './base.interface.js';

export const attachClass: attachFn = (key, elem, attr) => {
	if (key === "class") {
		let i = [];
		elem = addIntoClassList(elem, attr[key]);
		delete attr[key];
	}

	return { attr, elem };
}