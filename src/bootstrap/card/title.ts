import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { h } from "../../html/h.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "card-title");
	return attr;
};

export class title extends h {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(5, convert(bsConstArg("elem", arg)));
	}
}

export const Title = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<title, IAttr>(title, AttrOrElem, Elem);
