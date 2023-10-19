import { keyOfType } from "./../util/keyOfType.js";
import { IAttachFn } from "./_index.js";

export const attach: IAttachFn = (key, elem, attr) => {
	let changed = false;

	if (key && attr && typeof attr !== "undefined") {
		let k = keyOfType(key, attr);
		let i = Array.isArray(attr[k]) ? attr[k] : attr[k];
		elem.setAttribute(key, i!.toString());
		changed = true;
	}

	return { attr, elem, changed };
};
