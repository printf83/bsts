import { IAttachResult, IBase } from './base.interface';
export const attachHref = (key: string, elem: HTMLElement, opt: IBase): IAttachResult => {
    let i = Array.isArray(opt[key]) ? opt[key].join(" ") : opt[key];

	if (key === "href" && i === "#") {
		elem.setAttribute(key, "javascript:void(0);");
	} else {
		elem.setAttribute(key, i);
	}

	delete opt[key];

	return { opt, elem };
}