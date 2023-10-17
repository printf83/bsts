import { IAttr, IElem } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { div } from "../../html/div.js";

export interface Responsive extends IAttr {
	responsive?: bootstrapType.viewport;
}

const convert = (attr: Responsive) => {
	attr.class = mergeClass(attr.class, [attr.responsive ? `table-responsive-${attr.responsive}` : "table-responsive"]);

	delete attr.responsive;

	return attr;
};

export class responsive extends div {
	constructor();
	constructor(attr: Responsive);
	constructor(elem: IElem);
	constructor(attr: Responsive, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Responsive>("elem", arg)));
	}
}
