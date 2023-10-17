import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { UUID } from "../../core/uuid.js";
import { h5 } from "../../html/h5.js";

const convert = (attr: IAttr) => {
	attr.id ??= UUID();
	attr.class = mergeClass(attr.class, "offcanvas-title");
	return attr;
};

export class title extends h5 {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
