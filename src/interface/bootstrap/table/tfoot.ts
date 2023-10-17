import { IAttr, IElem } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { tfoot as TTfoot } from "../../html/tfoot.js";

export interface Tfoot extends IAttr {
	color?: bootstrapType.color;
}

const convert = (attr: Tfoot) => {
	attr.class = mergeClass(attr.class, [attr.color ? `table-${attr.color}` : undefined]);

	delete attr.color;

	return attr;
};

export class tfoot extends TTfoot {
	constructor();
	constructor(attr: Tfoot);
	constructor(elem: IElem);
	constructor(attr: Tfoot, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Tfoot>("elem", arg)));
	}
}
