import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { div } from "../../html/div.js";
import { btnclose } from "./btnclose.js";
import { header as Header } from "../../interface/bootstrap/modal/header.js";

export class header extends div {
	constructor();
	constructor(attr: Header);
	constructor(elem: elem | elem[]);
	constructor(attr: Header, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Header>("elem", arg));
	}

	convert(attr: Header) {
		attr.class = mergeClass(attr.class, "modal-header");

		if (attr.close) {
			if (attr.elem) {
				if (Array.isArray(attr.elem)) {
					attr.elem.push(new btnclose());
				} else {
					attr.elem = [attr.elem, new btnclose()];
				}
			} else {
				attr.elem = [new btnclose()];
			}
		}

		delete attr.close;
		return super.convert(attr);
	}
}
