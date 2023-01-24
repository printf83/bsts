import { IAttr, IElem, tag } from "../core/base/tag.js";
import { option } from "./option.js";

export interface IAttrTagDatalist extends IAttr {
	options?: string | string[];
}

const convert = (attr: IAttrTagDatalist, elem: IElem) => {
	let tElem: IElem = [];

	//convert option to tag
	if (attr.options) {
		let d = Array.isArray(attr.options) ? attr.options : [attr.options];
		tElem = d.map((i) => new option(i));
	}

	//conbine with elem
	if (elem) {
		if (Array.isArray(elem)) {
			tElem = [...elem, ...tElem];
		} else {
			tElem = [elem, ...tElem];
		}
	}

	delete attr.options;

	return { attr, elem: tElem };
};

export class datalist extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagDatalist, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("datalist");
		} else if (arg.length === 1) {
			super("datalist", arg[0]);
		} else if (arg.length === 2) {
			let { attr, elem } = convert(arg[0], arg[1]);
			super("datalist", attr, elem);
		}
	}
}
