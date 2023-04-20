import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { div } from "../../html/div.js";

const convert = (attr: IAttr) => {
	attr = mergeObject({ class: "progress-stacked" }, attr);
	return attr;
};

export class stacked extends div {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}

export const Stacked = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<stacked, IAttr>(stacked, AttrOrElem, Elem);
