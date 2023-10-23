import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { div } from "../../html/div.js";
import { responsive as Responsive } from "../../interface/bootstrap/table/responsive.js";

export class responsive extends div {
	constructor();
	constructor(attr: Responsive);
	constructor(elem: elem | elem[]);
	constructor(attr: Responsive, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Responsive>("elem", arg));
	}

	convert(attr: Responsive) {
		attr.class = mergeClass(attr.class, [
			attr.responsive ? `table-responsive-${attr.responsive}` : "table-responsive",
		]);

		delete attr.responsive;
		return super.convert(attr);
	}
}
