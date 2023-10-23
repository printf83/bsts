import { keyOfType } from "../util/keyOfType.js";
import { IAttachFn } from "./_index.js";

const formatDB: { [key: string]: string } = {
	loadingStyle: "loading",
	dataText: "data",
	startValue: "start",
	attrLabel: "label",
	attrWidth: "width",
	attrHeight: "height",
};

export const attach: IAttachFn = (key, elem, attr) => {
	let changed = false;
	if (key && attr && typeof attr !== "undefined") {
		if (key in formatDB) {
			let a = keyOfType(key, attr);
			let b = keyOfType(key, formatDB);
			if (typeof attr[a] !== "undefined") {
				elem.setAttribute(formatDB[b]!, attr[a]!.toString());
				changed = true;
			}

			return { attr, elem, changed };
		}
	}

	return { attr, elem, changed };
};
