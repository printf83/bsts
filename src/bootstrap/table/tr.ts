import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { tr as HTr } from "../../html/tr.js";
import { tr as Tr } from "../../interface/bootstrap/table/tr.js";

export class tr extends HTr {
	constructor();
	constructor(attr: Tr);
	constructor(elem: elem | elem[]);
	constructor(attr: Tr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Tr>("elem", arg));
	}

	convert(attr: Tr) {
		attr.class = mergeClass(attr.class, [
			attr.color ? `table-${attr.color}` : undefined,
			attr.active ? "table-active" : undefined,
		]);

		delete attr.color;
		delete attr.active;
		return super.convert(attr);
	}
}
