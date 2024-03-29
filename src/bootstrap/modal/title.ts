import { attr } from "../../interface/core/attr.js";
import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { UUID } from "../../core/util/uuid.js";
import { h1 } from "../../html/h1.js";
import { mergeObject } from "../../core/util/mergeObject.js";

export class title extends h1 {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor("elem", arg));
	}

	convert(attr: attr) {
		attr = mergeObject(
			{
				id: attr.id || UUID(),
				h: 5,
				class: "modal-title",
			},
			attr
		);

		return super.convert(attr);
	}
}
