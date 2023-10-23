import { elem } from "../../../interface/core/elem.js";
import { bsConstructor } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/util/mergeClass.js";
import { div } from "../../../html/div.js";
import { item } from "./item.js";
import { container as Container } from "../../../interface/bootstrap/nav/content/container.js";

const convert = (attr: Container) => {
	attr.class = mergeClass(attr.class, "tab-content");

	if (attr.item && !attr.elem) {
		if (!Array.isArray(attr.item)) {
			attr.item = [attr.item];
		}

		attr.elem = attr.item.map((i) => {
			return new item(i);
		});
	}

	delete attr.item;
	return attr;
};

export class container extends div {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem | elem[]);
	constructor(attr: Container, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstructor("elem", arg)));
	}

	convert(attr: Container) {
		return super.convert(attr);
	}
}
