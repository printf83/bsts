import { IAttachResult, IBase } from './base.interface.js';

export const attachOther = (key: string, elem: HTMLElement, opt: IBase):IAttachResult => {
	let i = Array.isArray(opt[key]) ? opt[key].join(" ") : opt[key];

    elem.setAttribute(key, i);
	delete opt[key];

	return { opt, elem };
}