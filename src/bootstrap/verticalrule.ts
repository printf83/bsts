import { bsConstructorNoElement } from "../core/bootstrap.js";
import { div } from "../html/div.js";
import { mergeClass } from "../core/util/mergeClass.js";

import { attr } from "../interface/core/attr.js";

/**
 * verticalrule is a Bootstrap component that renders a vertical rule (line).
 * It extends the div component and adds the "vr" class.
 * The convert() method adds the "vr" class and sets the element to a space,
 * then calls the super convert() method.
 */
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
