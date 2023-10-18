import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { UUID } from "../../core/uuid.js";
import { h1 } from "../../html/h1.js";
import { mergeObject } from "../../core/mergeObject.js";

const convert = (attr: attr) => {
	attr = mergeObject(
		{
			id: attr.id || UUID(),
			h: 5,
			class: "modal-title",
		},
		attr
	);

	return attr;
};

export class title extends h1 {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem);
	constructor(attr: attr, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
