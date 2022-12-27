import { IBase, IAttachResult } from './base.interface';
export const attachData = (key:string, elem:HTMLElement, opt:IBase):IAttachResult=> {
	if (key.startsWith("data")) {
		elem.setAttribute(
			key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()),
			opt[key]
		);

		delete opt[key];
	}

	return { opt, elem };
}