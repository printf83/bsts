import { IAttr, IElem } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/mergeClass.js";
import { div } from "../../../html/div.js";
import { mergeObject } from "../../../core/mergeObject.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "carousel-inner");
	attr = mergeObject({ class: "carousel-inner" }, attr);
	return attr;
};

export class container extends div {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
