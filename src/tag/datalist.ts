import { IAttr, isAttr, tag } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { IAttrTagOption, option } from "./option.js";

export type IElemTagDatalist = option | option[];

export interface IAttrTagDatalist extends IAttr {
	options?: string | IAttrTagOption | (string | IAttrTagOption)[];

	elem?: IElemTagDatalist;
}

const convert = (attr: IAttrTagDatalist) => {
	let tElem: IElemTagDatalist = [];

	//convert option to tag
	if (attr.options) {
		let d = Array.isArray(attr.options) ? attr.options : [attr.options];
		tElem = d.map((i) => {
			if (typeof i === "string") {
				return new option({ value: i });
			} else {
				return new option(i);
			}
		});
	}

	//conbine with elem
	if (attr.elem) {
		if (Array.isArray(attr.elem)) {
			tElem = [...attr.elem, ...tElem];
		} else {
			tElem = [attr.elem, ...tElem];
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
			if (isAttr<IAttrTagDatalist>(arg[0])) {
				super("datalist", convert(arg[0]));
			} else {
				super("datalist", convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			super("datalist", convert(mergeObject({ elem: arg[1] }, arg[0])));
		}
	}

	static gen = (attrs: IAttrTagDatalist[]) => attrs.map((i) => new datalist(i));
}
