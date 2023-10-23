import { attr } from "../../interface/core/attr.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { hr } from "../../html/hr.js";
import { bsConstructorNoElement } from "../../core/bootstrap.js";

export class divider extends hr {
	constructor();
	constructor(attr: attr);
	constructor(...arg: any[]) {
		super(bsConstructorNoElement(arg));
	}

	convert(attr: attr) {
		attr.class = mergeClass(attr.class, "dropdown-divider");
		return super.convert(attr);
	}
}
