import { IAttr, tag } from "../core/base/tag.js";
import { IAttrTagOption, option } from "./option.js";

export type IElemTagDatalist = option | option[];

export interface IAttrTagDatalist extends IAttr {
	options?: string | IAttrTagOption | (string | IAttrTagOption)[];

	elem?: IElemTagDatalist;
}

const convert = (attr: IAttrTagDatalist, elem: IElemTagDatalist) => {
	let tElem: IElemTagDatalist = [];

	//convert option to tag
	if (attr.options) {
		let d = Array.isArray(attr.options) ? attr.options : [attr.options];
		tElem = d.map((i) => {
			if (typeof i === "string") {
				return new option({ value: i }, i);
			} else {
				return new option(i, "");
			}
		});
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
	delete attr.elem;

	attr.elem = tElem;

	return attr;
};

export class datalist extends tag {
	constructor();
	constructor(elem: IElemTagDatalist);
	constructor(attr: IAttrTagDatalist);
	constructor(attr: IAttrTagDatalist, elem: IElemTagDatalist);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("datalist");
		} else if (arg.length === 1) {
			super("datalist", arg[0]);
		} else if (arg.length === 2) {
			super("datalist", convert(arg[0], arg[1]));
		}
	}

	static gen = (attrs: IAttrTagDatalist[]) => attrs.map((i) => new datalist(i));
}
