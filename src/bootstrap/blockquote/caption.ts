import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { figcaption } from "../../html/figcaption.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "blockquote-footer");
	return attr;
};

export class caption extends figcaption {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}

export const Caption = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<caption, IAttr>(caption, AttrOrElem, Elem);