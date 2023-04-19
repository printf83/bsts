import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { blockquote } from "../../html/blockquote.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "blockquote");
	return attr;
};

export class container extends blockquote {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}

export const Container = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<container, IAttr>(container, AttrOrElem, Elem);