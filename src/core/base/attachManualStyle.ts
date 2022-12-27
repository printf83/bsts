import { IBase, IAttachResult } from './base.interface';

export const attachManualStyle = (key: string, elem: HTMLElement, opt: IBase): IAttachResult=> {
	if (key === "style") {
		let styleKeys = Object.keys(opt[key]);
		if (styleKeys) {
			for (let x = 0; x < styleKeys.length; x++) {
				if (opt[key][styleKeys[x]]) {
					elem.style.setProperty(styleKeys[x], opt[key][styleKeys[x]]);
				}
			}
		}

		delete opt[key];
	}

	return { opt, elem };
}