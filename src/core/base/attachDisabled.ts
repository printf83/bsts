import { addIntoClassList } from '../fn/addIntoClassList.js';
import { IBase, IAttachResult } from './base.interface';
export const attachDisabled = (key:string, elem:HTMLElement, opt:IBase):IAttachResult => {
	if (key === "disabled" && opt[key] === true) {
		elem = addIntoClassList(elem, key);
		elem.setAttribute(`aria-${key}`, opt[key]);
		elem.setAttribute(key, key);
		elem.setAttribute("tabindex", "-1");
		
		delete opt[key];
	}

	return { opt, elem };
}