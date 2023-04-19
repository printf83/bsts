import { tagConsNoElemArg, IAttr, tag, genTagClass } from "../core/tag.js";

export interface ITagTextarea extends IAttr {
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

const convert = (attr: ITagTextarea) => {
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
	constructor(attr: ITagTextarea);
	constructor(...arg: any[]) {
		super("textarea", convert(tagConsNoElemArg<ITagTextarea>(arg)));
	}
}

export const Textarea = (Attr?: ITagTextarea) => genTagClass<textarea, ITagTextarea>(textarea, Attr);
