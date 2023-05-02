import { IAttr, IElem, genTagClass } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/mergeClass.js";
import { div } from "../../../html/div.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "tab-content");
	return attr;
};

export class content extends div {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IAttr>("elem", arg)));
	}
}

export const Content = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<content, IAttr>(content, AttrOrElem, Elem);