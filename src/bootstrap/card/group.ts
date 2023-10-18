import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { div } from "../../html/div.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "card-group");
	return attr;
};

export class group extends div {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: elem);
	constructor(attr: IAttr, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
