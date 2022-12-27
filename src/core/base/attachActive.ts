import { addIntoClassList } from '../fn/addIntoClassList.js';
import { IBase, IAttachResult } from './base.interface';
export const attachActive = (key:string, elem:HTMLElement, opt:IBase):IAttachResult => {
	if (opt[key] === true && key === "active") {
		elem = addIntoClassList(elem, "active");
		delete opt[key];
	}

	return { opt, elem };
}