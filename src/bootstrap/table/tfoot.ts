import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
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
	constructor(elem: elem);
	constructor(attr: Tfoot, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Tfoot>("elem", arg)));
	}
}
