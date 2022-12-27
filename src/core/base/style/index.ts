import { IAttachResult } from './../base.interface';
import { IBase } from "../base.interface.js";
import { allow } from "./allow.js";

export const attachStyle = (key:string, elem:HTMLElement, opt:IBase):IAttachResult=> {
    let a_key = allow(key);
    
	if (a_key !== null) {
		elem.style[a_key] = opt[key];
		delete opt[key];
	}

	return { opt, elem };
}