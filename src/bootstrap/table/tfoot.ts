import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { tfoot as HTfoot } from "../../html/tfoot.js";
import { tfoot as Tfoot } from "../../interface/bootstrap/table/tfoot.js";

export class tfoot extends HTfoot {
	constructor();
	constructor(attr: Tfoot);
	constructor(elem: elem | elem[]);
	constructor(attr: Tfoot, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Tfoot>("elem", arg));
	}

	convert(attr: Tfoot) {
		attr.class = mergeClass(attr.class, [attr.color ? `table-${attr.color}` : undefined]);

		delete attr.color;
		return super.convert(attr);
	}
}
