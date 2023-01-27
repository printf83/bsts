import { IAttr, tag } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";

export interface IAttrTagTextarea extends IAttr {
	autofocus?: boolean;
	cols?: number;
	dirname?: string;
	disabled?: boolean;
	form?: string;
	maxlength?: number;
	name?: string;
	placeholderText?: string;
	readonly?: boolean;
	required?: boolean;
	rows?: number;
	wrap?: "hard" | "soft";
	value?: string;
}

const convert = (attr: IAttrTagTextarea): IAttrTagTextarea => {
	//move value to elem

	if (attr.value) {
		if (attr.elem) {
			if (Array.isArray(attr.elem)) {
				attr.elem = [...attr.elem, attr.value];
			} else {
				attr.elem = [attr.elem, attr.value];
			}
		} else {
			attr.elem = attr.value;
		}

		delete attr.value;
	}

	return attr;
};

export class textarea extends tag {
	constructor();
	constructor(value: string);
	constructor(attr: IAttrTagTextarea);
	constructor(attr: IAttrTagTextarea, value: string);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("textarea", convert({}));
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				super("textarea", convert({ value: arg[0] }));
			} else {
				super("textarea", convert(arg[0]));
			}
		} else if (arg.length === 2) {
			super("textarea", convert(mergeObject({ value: arg[1] }, arg[0])));
		}
	}

	static gen = (attrs: IAttrTagTextarea[]) => attrs.map((i) => new textarea(i));
}
