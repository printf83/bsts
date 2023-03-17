import { bsConstArg } from "../../core/base/bootstrap.js";
import { IAttr, IElem, tag } from "../../core/base/tag.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { UUID } from "../../core/fn/uuid.js";
import { a } from "../../html/a.js";
import { h } from "../../html/h.js";

const convert = (attr: IAttr) => {
	attr.id = attr.id || UUID();
	attr = mergeObject({ class: "example-title", marginTop: 5 }, attr);

	if (attr.elem) {
		let strElem: string = "";
		if (typeof attr.elem === "string") {
			strElem = attr.elem;
		} else {
			strElem = `#${attr.id}`;
		}

		let tElem: (string | tag)[] = [];
		if (Array.isArray(attr.elem)) {
			tElem = attr.elem;
		} else {
			tElem = [attr.elem];
		}

		tElem.push(
			new a(
				{
					class: "anchor-link",
					href: `#${attr.id}`,
					aria: { label: `Link to this section: ${strElem}` },
				},
				""
			)
		);

		attr.elem = tElem;
	}

	return attr;
};

export class title extends h {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(2, bsConstArg("elem", convert, arg));
	}
}
