import { IAttr, IElem, genTagClass } from "../../core/tag.js";
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
	constructor(); //#1
	constructor(attr: Tfoot); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Tfoot, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Tfoot>("elem", arg)));
	}
}

export const Tfoot = (AttrOrElem?: Tfoot | IElem, Elem?: IElem) => genTagClass<tfoot, Tfoot>(tfoot, AttrOrElem, Elem);
