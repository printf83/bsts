import { tagConsNoElemArg, IAttr, tag } from "../core/tag.js";

export interface IAttrTagTextarea extends IAttr {
	autofocus?: boolean;
	cols?: number;
	dirname?: string;
	disabled?: boolean;
	form?: string;
	maxlength?: number;
	name?: string;
	placeholder?: string;
	readonly?: boolean;
	required?: boolean;
	rows?: number;
	wrap?: "hard" | "soft";
	value?: string;
}

const convert = (attr: IAttrTagTextarea) => {
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
	constructor(attr: IAttrTagTextarea);
	constructor(...arg: any[]) {
		super("textarea", convert(tagConsNoElemArg<IAttrTagTextarea>(arg)));
	}
}
