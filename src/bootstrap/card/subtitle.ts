import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { h } from "../../html/h.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "card-subtitle");
	return attr;
};

export class subtitle extends h {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(6, convert(bsConstArg("elem", arg)));
	}
}

export const Subtitle = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<subtitle, IAttr>(subtitle, AttrOrElem, Elem);
