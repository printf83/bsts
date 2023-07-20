import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { UUID } from "../../core/uuid.js";
import { h } from "../../html/h.js";
import { mergeObject } from "../../core/mergeObject.js";

const convert = (attr: IAttr) => {
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

export class title extends h {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super(1, convert(bsConstArg("elem", arg)));
	}
}
