import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { strong } from "../../html/strong.js";

const convert = (attr: IAttr) => {
	attr = mergeObject({ marginEnd: "auto" }, attr);
	return attr;
};

export class title extends strong {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: elem);
	constructor(attr: IAttr, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
