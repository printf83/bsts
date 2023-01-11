import { keyOfType } from "../fn/keyOfType.js";
import { IAttachFn } from "./index.js";

const db: { [key: string]: string } = {
	placeholderText: "placeholder",
	dataText: "data",
	startValue: "start",
};

export const attachAlias: IAttachFn = (key, elem, attr) => {
	if (attr && typeof attr !== "undefined") {
		if (db.hasOwnProperty(key)) {
			let a = keyOfType(key, attr);
			let b = keyOfType(key, db);
			if (typeof attr[a] !== "undefined") {
				elem.setAttribute(db[b], attr[a]!.toString());
				delete attr[a];
			}

			return { attr, elem };
		}
	}

	return { attr, elem };
};
