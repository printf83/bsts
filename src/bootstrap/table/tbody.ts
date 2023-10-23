import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { tbody as HTbody } from "../../html/tbody.js";
import { tbody as Tbody } from "../../interface/bootstrap/table/tbody.js";

export class tbody extends HTbody {
	constructor();
	constructor(attr: Tbody);
	constructor(elem: elem | elem[]);
	constructor(attr: Tbody, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Tbody>("elem", arg));
	}

	convert(attr: Tbody) {
		attr.class = mergeClass(attr.class, [attr.divider ? "table-group-divider" : undefined]);
		delete attr.divider;
		return super.convert(attr);
	}
}
