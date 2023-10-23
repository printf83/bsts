import { attr } from "../../interface/core/attr.js";
import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { UUID } from "../../core/util/uuid.js";
import { h5 } from "../../html/h5.js";

export class title extends h5 {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor("elem", arg));
	}

	convert(attr: attr) {
		attr.id ??= UUID();
		attr.class = mergeClass(attr.class, "offcanvas-title");
		return super.convert(attr);
	}
}
