import { bsConstructorNoElement } from "../core/bootstrap.js";
import { div } from "../html/div.js";
import { mergeClass } from "../core/util/mergeClass.js";

import { attr } from "../interface/core/attr.js";

export class verticalrule extends div {
	constructor();
	constructor(attr: attr);
	constructor(...arg: any[]) {
		super(bsConstructorNoElement(arg));
	}

	convert(attr: attr) {
		attr.class = mergeClass(attr.class, ["vr"]);
		attr.elem = ` `; //" ";
		return super.convert(attr);
	}
}
