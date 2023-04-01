import { keyOfType } from "../keyOfType.js";
import { IAttachFn } from "./_index.js";

const dbAlias: { [key: string]: string } = {
	loadingStyle: "loading",
	attrLabel: "label",
	dataText: "data",
	startValue: "start",
};

export const attachAlias: IAttachFn = (key, elem, attr) => {
	if (attr && typeof attr !== "undefined") {
		if (key in dbAlias) {
			let a = keyOfType(key, attr);
			let b = keyOfType(key, dbAlias);
			if (typeof attr[a] !== "undefined") {
				elem.setAttribute(dbAlias[b], attr[a]!.toString());
				delete attr[a];
			}

			return { attr, elem };
		}
	}

	return { attr, elem };
};
