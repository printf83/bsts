import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { thead as TThead } from "../../html/thead.js";

export interface Thead extends IAttr {
	color?: bootstrapType.color;
}

const convert = (attr: Thead) => {
	attr.class = mergeClass(attr.class, [attr.color ? `table-${attr.color}` : undefined]);

	delete attr.color;

	return attr;
};

export class thead extends TThead {
	constructor(); //#1
	constructor(attr: Thead); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Thead, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Thead>("elem", arg)));
	}
}

export const Thead = (AttrOrElem?: Thead | IElem, Elem?: IElem) => genTagClass<thead, Thead>(thead, AttrOrElem, Elem);
