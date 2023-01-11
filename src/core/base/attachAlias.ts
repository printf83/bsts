import { keyOfType } from "../fn/keyOfType.js";
import { IAttachFn } from "./index.js";

const db = {
	placeholderText: "placeholder",
	dataText: "data",
	startValue: "start",
};

export const attachAlias: IAttachFn = (key, elem, attr) => {
	if (attr && typeof attr !== "undefined") {
		if (db.hasOwnProperty(key)) {
			let k = keyOfType(key, attr);
			if (typeof attr[k] !== "undefined") {
				elem.setAttribute(db[key], attr[k]!.toString());
				delete attr[k];
			}
		}
	}

	return { attr, elem };
};
