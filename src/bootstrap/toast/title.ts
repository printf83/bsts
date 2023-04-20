import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { strong } from "../../html/strong.js";

const convert = (attr: IAttr) => {
	attr = mergeObject({ marginEnd: "auto" }, attr);
	return attr;
};

export class title extends strong {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}

export const Title = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<title, IAttr>(title, AttrOrElem, Elem);
