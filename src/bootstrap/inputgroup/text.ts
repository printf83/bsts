import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { span } from "../../html/span.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "input-group-text");
	return attr;
};

export class text extends span {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}

export const Text = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<text, IAttr>(text, AttrOrElem, Elem);
