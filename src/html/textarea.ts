import { tagConstructorNoElement, tag, ConstructorArgsNoElement } from "../core/tag.js";
import { textarea as Textarea } from "../interface/html/textarea.js";

export class textarea extends tag {
	constructor();
	constructor(attr: Textarea);
	constructor(...arg: ConstructorArgsNoElement<Textarea>) {
		super("textarea", tagConstructorNoElement<Textarea>(arg));
	}

	convert(attr: Textarea) {
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
		return super.convert(attr);
	}
}
