import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { tbody as TTbody } from "../../html/tbody.js";

export interface Tbody extends IAttr {
	divider?: boolean;
}

const convert = (attr: Tbody) => {
	attr.class = mergeClass(attr.class, [attr.divider ? "table-group-divider" : undefined]);

	delete attr.divider;

	return attr;
};

export class tbody extends TTbody {
	constructor(); //#1
	constructor(attr: Tbody); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Tbody, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Tbody>("elem", arg)));
	}
}

export const Tbody = (AttrOrElem?: Tbody | IElem, Elem?: IElem) => genTagClass<tbody, Tbody>(tbody, AttrOrElem, Elem);
