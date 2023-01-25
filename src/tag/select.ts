import { IAttr, IElem, tag } from "../core/base/tag.js";
import { IAttrTagOption, option } from "./option.js";

export interface IAttrTagSelect extends IAttr {
	autofocus?: boolean;
	disabled?: boolean;
	form?: string;
	multiple?: boolean;
	name?: string;
	required?: boolean;
	size?: number;

	options?: string | IAttrTagOption | (string | IAttrTagOption)[];
}

const convert = (attr: IAttrTagSelect, elem: IElem) => {
	let tElem: IElem = [];

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

	return { attr, elem: tElem };
};

export class select extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagSelect);
	constructor(attr: IAttrTagSelect, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("select");
		} else if (arg.length === 1) {
			super("select", arg[0]);
		} else if (arg.length === 2) {
			let { attr, elem } = convert(arg[0], arg[1]);
			super("select", attr, elem);
		}
	}
}
