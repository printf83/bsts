import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { tr as TTr } from "../../html/tr.js";

export interface Tr extends IAttr {
	color?: bootstrapType.color;
	active?: boolean;
}

const convert = (attr: Tr) => {
	attr.class = mergeClass(attr.class, [
		attr.color ? `table-${attr.color}` : undefined,
		attr.active ? "table-active" : undefined,
	]);

	delete attr.color;
	delete attr.active;

	return attr;
};

export class tr extends TTr {
	constructor(); //#1
	constructor(attr: Tr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Tr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Tr>("elem", arg)));
	}
}

export const Tr = (AttrOrElem?: Tr | IElem, Elem?: IElem) => genTagClass<tr, Tr>(tr, AttrOrElem, Elem);
