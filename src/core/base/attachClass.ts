import { addIntoClassList } from '../fn/addIntoClassList.js';
import { attachFn } from './base.interface.js';

export const attachClass: attachFn = (key, elem, opt) => {
	if (key === "class") {
		let i = [];
		elem = addIntoClassList(elem, opt[key]);
		delete opt[key];
	}

	return { opt, elem };
}