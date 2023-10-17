import { IElem, tag, tagConsArg } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";
import { mergeObject } from "../core/mergeObject.js";
import { a as A } from "../interface/html/a.js";

const convert = (attr: A) => {
	attr.class = mergeClass(attr.class, [
		attr.color ? `link-${attr.color}` : undefined,
		attr.stretched ? "stretched-link" : undefined,
		attr.disabled ? "disabled" : undefined,
	]);

	if (attr.disabled) {
		delete attr.href;

		attr = mergeObject(
			{
				aria: { disabled: "true" },
				tabindex: -1,
			},
			attr
		);
	}

	delete attr.color;
	delete attr.stretched;
	delete attr.disabled;

	return attr;
};

export class a extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: A);
	constructor(attr: A, elem: IElem);
	constructor(...arg: any[]) {
		super("a", convert(tagConsArg<A>("elem", arg)));
	}
}
