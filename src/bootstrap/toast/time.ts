import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { small } from "../../html/small.js";
import { mergeObject } from "../../core/mergeObject.js";

const convert = (attr: IAttr) => {
	attr.elem ??= new Date().getTime().toString();

	if (attr.elem) {
		if (typeof attr.elem === "string") {
			if (!isNaN(parseInt(attr.elem))) {
				attr = mergeObject({ data: { "bs-timer": parseInt(attr.elem) } }, attr);
				attr.elem = "Just now";
			}
		}
	}

	return attr;
};

export class time extends small {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}

export const Time = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<time, IAttr>(time, AttrOrElem, Elem);
