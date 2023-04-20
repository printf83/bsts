import { bsConstArg } from "../core/bootstrap.js";
import { IAttr, IElem, genTagClass } from "../core/tag.js";
import { mergeObject } from "../core/mergeObject.js";
import { div } from "../html/div.js";

const convert = (attr: IAttr) => {
	attr = mergeObject(
		{
			col: true,
		},
		attr
	);

	return attr;
};

export class col extends div {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}

export const Col = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<col, IAttr>(col, AttrOrElem, Elem);
