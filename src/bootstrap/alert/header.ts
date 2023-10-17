import { IAttr, IElem, tagConsArg } from "../../core/tag.js";
import { mergeClass } from "../../core/mergeClass.js";
import { h4 } from "../../html/h4.js";

const convert = (attr: IAttr) => {
	//add alert-header
	attr.class = mergeClass(attr.class, "alert-heading");
	return attr;
};

export class header extends h4 {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(tagConsArg("elem", arg)));
	}
}
