import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { tfoot as HTfoot } from "../../html/tfoot.js";
import { tfoot as Tfoot } from "../../interface/bootstrap/table/tfoot.js";

const convert = (attr: Tfoot) => {
	attr.class = mergeClass(attr.class, [attr.color ? `table-${attr.color}` : undefined]);

	delete attr.color;

	return attr;
};

export class tfoot extends HTfoot {
	constructor();
	constructor(attr: Tfoot);
	constructor(elem: elem | elem[]);
	constructor(attr: Tfoot, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstructor<Tfoot>("elem", arg)));
	}

	convert(attr: Tfoot) {
		return super.convert(attr);
	}
}
