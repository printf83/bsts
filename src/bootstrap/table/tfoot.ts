import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { tfoot as TTfoot } from "../../html/tfoot.js";

export interface IBsTableTfoot extends IAttr {
	color?: bootstrapType.color;
}

const convert = (attr: IBsTableTfoot) => {
	attr.class = mergeClass(attr.class, [attr.color ? `table-${attr.color}` : undefined]);

	delete attr.color;

	return attr;
};

export class tfoot extends TTfoot {
	constructor(); //#1
	constructor(attr: IBsTableTfoot); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsTableTfoot, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsTableTfoot>("elem", arg)));
	}
}

export const Tfoot = (AttrOrElem?: IBsTableTfoot | IElem, Elem?: IElem) =>
	genTagClass<tfoot, IBsTableTfoot>(tfoot, AttrOrElem, Elem);
