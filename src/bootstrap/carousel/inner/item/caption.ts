import { IAttr, IElem, genTagClass } from "../../../../core/tag.js";
import { bsConstArg } from "../../../../core/bootstrap.js";
import { div } from "../../../../html/div.js";
import { mergeClass } from "../../../../core/mergeClass.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, ["carousel-caption"]);
	attr.display ??= ["none", "md-block"];

	return attr;
};

export class caption extends div {
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
