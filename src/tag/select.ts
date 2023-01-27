import { IAttr, isAttr, tag } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { optgroup } from "./optgroup.js";
import { IAttrTagOption, option } from "./option.js";

export type IElemTagSelect = option | optgroup | (option | optgroup)[];

export interface IAttrTagSelect extends IAttr {
	autofocus?: boolean;
	disabled?: boolean;
	form?: string;
	multiple?: boolean;
	name?: string;
	required?: boolean;
	size?: number;

	elem?: IElemTagSelect;

	options?: string | IAttrTagOption | (string | IAttrTagOption)[];
}

const convert = (attr: IAttrTagSelect) => {
	let tElem: IElemTagSelect = [];

	//convert option to tag
	if (attr.options) {
		let d = Array.isArray(attr.options) ? attr.options : [attr.options];
		tElem = d.map((i) => {
			if (typeof i === "string") {
				return new option({ value: i, elem: i });
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

export class select extends tag {
	constructor();
	constructor(elem: IElemTagSelect);
	constructor(attr: IAttrTagSelect);
	constructor(attr: IAttrTagSelect, elem: IElemTagSelect);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("select");
		} else if (arg.length === 1) {
			if (isAttr<IAttrTagSelect>(arg[0])) {
				super("select", convert(arg[0]));
			} else {
				super("select", convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			super("select", convert(mergeObject({ elem: arg[1] }, arg[0])));
		}
	}

	static gen = (attrs: IAttrTagSelect[]) => attrs.map((i) => new select(i));
}
