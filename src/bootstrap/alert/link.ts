import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { a, ITagA } from "../../html/a.js";

const convert = (attr: ITagA) => {
	attr.class = mergeClass(attr.class, "alert-link");
	return attr;
};

export class link extends a {
	constructor(); //#1
	constructor(attr: ITagA); //#2
	constructor(elem: IElem); //#3
	constructor(attr: ITagA, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<ITagA>("elem", convert, arg));
	}
}
