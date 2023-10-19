import { keyOfType } from "../keyOfType.js";
import { IAttachFn } from "./_index.js";

export type IFormat = (elem: Element, data: string | number | boolean) => Element;

const formatDB: {
	[key: string]: IFormat;
} = {
	theme: (elem, data) => {
		elem.setAttribute(`data-bs-theme`, data.toString());
		return elem;
	},
	pointer: (elem, data) => {
		if (data) {
			elem.setAttribute("role", "button");
		}

		return elem;
	},
	label: (elem, data) => {
		if (data) {
			elem.setAttribute("aria-label", data.toString());
		}

		return elem;
	},
	labelledby: (elem, data) => {
		if (data) {
			elem.setAttribute("aria-labelledby", data.toString());
		}

		return elem;
	},
	ownby: (elem, data) => {
		if (data) {
			elem.setAttribute("aria-owns", data.toString());
		}

		return elem;
	},
	describedby: (elem, data) => {
		if (data) {
			elem.setAttribute("aria-describedby", data.toString());
		}

		return elem;
	},
	controlfor: (elem, data) => {
		if (data) {
			elem.setAttribute("aria-controls", data.toString());
		}

		return elem;
	},
	gridTemplateColumns: (elem, data) => {
		if (data) {
			(elem as HTMLElement).style.gridTemplateColumns = data.toString();
		}

		return elem;
	},
	gridTemplateAreas: (elem, data) => {
		if (data) {
			(elem as HTMLElement).style.gridTemplateAreas = data.toString();
		}

		return elem;
	},
	gridTemplateRows: (elem, data) => {
		if (data) {
			(elem as HTMLElement).style.gridTemplateRows = data.toString();
		}

		return elem;
	},
	gridArea: (elem, data) => {
		if (data) {
			(elem as HTMLElement).style.gridArea = data.toString();
		}

		return elem;
	},
};

let allowPropDB: (string | undefined)[] = [];

const allowProp = (key?: string) => {
	if (key) {
		if (allowPropDB.length === 0) {
			allowPropDB = Object.keys(formatDB);
		}

		if (allowPropDB.indexOf(key) > -1) {
			return key;
		}
	}

	return null;
};

const addAttr = (rule: IFormat | undefined, data: string | number | boolean, elem: Element) => {
	if (rule) {
		elem = rule(elem, data);
	}

	return elem;
};

export const attach: IAttachFn = (key, elem, attr) => {
	let changed = false;
	let allowKey = allowProp(key);
	if (allowKey) {
		let a = keyOfType(key, attr);
		let b = keyOfType(allowKey, formatDB);
		let data: (string | number | boolean)[] = [];

		if (!Array.isArray(attr[a])) {
			data = [attr[a] as string | number | boolean];
		} else {
			data = attr[a] as (string | number | boolean)[];
		}

		data.forEach((i) => {
			elem = addAttr(formatDB[b], i, elem);
		});

		delete attr[a];
		changed = true;
	}

	return { attr, elem, changed };
};
