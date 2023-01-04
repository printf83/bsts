import { IBase, IAttachResult } from './base.interface.js';
export const attachAria = (key:string, elem:HTMLElement, opt:IBase):IAttachResult => {
	if (key.startsWith("aria")) {
		elem.setAttribute(
			key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()),
			opt[key]
		);

		delete opt[key];
	}

	return { opt, elem };
}