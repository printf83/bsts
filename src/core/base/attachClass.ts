import { addIntoClassList } from '../fn/addIntoClassList.js';
import { IBase, IAttachResult } from './base.interface.js';

export const attachClass = (key:string, elem:HTMLElement, opt:IBase) : IAttachResult => {
	if (key === "class") {
		let i = [];
		elem = addIntoClassList(elem, opt[key]);
		delete opt[key];
	}

	return { opt, elem };
}